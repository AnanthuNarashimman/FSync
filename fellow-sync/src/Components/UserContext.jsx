import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState("Fetching...");
    const [mail, setUserMail] = useState("Fetching...");

    useEffect(() => {
        const socket = io("http://127.0.0.1:5000");
        if (!localStorage.getItem("username") || !localStorage.getItem("mail")) {
            fetch("http://localhost:5000/get-user", { 
                method: "GET",
                credentials: "include"
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === "user_found") {
                    setUserName(data.user_name);
                    setUserMail(data.user_mail);
                }
            })
            .catch(error => console.error("Failed to fetch user:", error));
        }

        socket.on("user_logged_in", (userData) => {  
            setUserName(userData.user_name);
            setUserMail(userData.email);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <UserContext.Provider value={{ userName, mail }}>
            {children}
        </UserContext.Provider>
    );
};
