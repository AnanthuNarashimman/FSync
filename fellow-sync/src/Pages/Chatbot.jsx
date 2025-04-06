import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown"; 


import '../styles/pagestyles/Chatbot.css';
import Backbutton from "../Components/Backbutton.jsx";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // State for tracking API request
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return; // Prevent sending if already loading

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true); // Set loading state to true

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        { contents: [{ parts: [{ text: input }] }] },
        { params: { key: apiKey } }
      );

      const botResponse = response.data.candidates[0].content.parts[0].text;
      const botMessage = { sender: "bot", text: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I couldn't process that." },
      ]);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-bubble ${msg.sender}`}>
            <ReactMarkdown>{msg.text}</ReactMarkdown> 
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <textarea
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          rows={3}
          style={{ resize: "none", overflowY: "auto", minHeight: "50px", maxHeight: "150px" }}
          readOnly={loading} 
        />
        <button onClick={sendMessage} disabled={loading}>
          {loading ? "⋯" : "Send"}
        </button>
      </div>
    </div>

    <Backbutton />
    </>
  );
};

export default ChatPage;
