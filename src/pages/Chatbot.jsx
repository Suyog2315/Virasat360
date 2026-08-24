import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Chatbot.css";

function Chatbot() {

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Namaste! 🙏 I am the Virasat360 Heritage Guide. Ask me about Odisha's heritage."
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input
    };

    const botMessage = {
      sender: "bot",
      text:
        "That's an interesting question about Odisha's heritage. Our AI Heritage Guide will provide a detailed, evidence-based answer here."
    };

    setMessages(prev => [
      ...prev,
      userMessage,
      botMessage
    ]);

    setInput("");
  };

  return (
    <div className="chat-page">

      <Navbar />

      <main className="chat-container">

        <div className="chat-header">

          <p className="section-label">
            HERITAGE AI
          </p>

          <h1>
            Ask Odisha's
            <span> Heritage Guide.</span>
          </h1>

          <p>
            Ask questions about temples, architecture,
            history and cultural traditions.
          </p>

        </div>

        <div className="chat-box">

          <div className="messages">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`message ${message.sender}`}
              >
                {message.text}
              </div>

            ))}

          </div>

          <div className="chat-input">

            <button>
              🎤
            </button>

            <input
              type="text"
              placeholder="Ask about Konark..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button
              onClick={sendMessage}
            >
              →
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Chatbot;