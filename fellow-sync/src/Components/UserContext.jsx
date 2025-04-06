import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState("Fetching...");
    const [mail, setUserMail] = useState("Fetching...");

    useEffect(() => {
        const socket = io("https://f-sync-sigma.vercel.app");
        if (!localStorage.getItem("username") || !localStorage.getItem("mail")) {
            fetch("https://f-sync-sigma.vercel.app/get-user", { 
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
