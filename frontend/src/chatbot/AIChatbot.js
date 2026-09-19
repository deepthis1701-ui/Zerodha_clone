import React, { useState } from "react";

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 I'm the TradeX AI Assistant. Ask me anything about stocks, trading, markets, or the TradeX website."
    }
  ]);

  const sendMessage = async () => {
    if (!input.trim() || loading) {
      return;
    }

    const userMessage = input.trim();

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: "user",
        text: userMessage
      }
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userMessage
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to get AI response"
        );
      }

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "bot",
          text: data.reply
        }
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "bot",
          text: "Sorry, I couldn't connect to the AI server. Please make sure the chatbot backend is running."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#387ed1",
          color: "white",
          fontSize: "26px",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)"
        }}
        aria-label="Open TradeX AI Assistant"
      >
        {isOpen ? "×" : "🤖"}
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "95px",
            right: "25px",
            width: "360px",
            height: "520px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 5px 25px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9998,
            border: "1px solid #ddd"
          }}
        >
          <div
            style={{
              backgroundColor: "#387ed1",
              color: "white",
              padding: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <strong>🤖 TradeX AI Assistant</strong>

              <div
                style={{
                  fontSize: "12px",
                  marginTop: "3px"
                }}
              >
                Educational Assistant
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "22px",
                cursor: "pointer"
              }}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: "15px",
              overflowY: "auto",
              backgroundColor: "#f7f7f7"
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent:
                    message.sender === "user"
                      ? "flex-end"
                      : "flex-start",
                  marginBottom: "12px"
                }}
              >
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    backgroundColor:
                      message.sender === "user"
                        ? "#387ed1"
                        : "white",
                    color:
                      message.sender === "user"
                        ? "white"
                        : "#333",
                    border:
                      message.sender === "bot"
                        ? "1px solid #ddd"
                        : "none",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    whiteSpace: "pre-wrap"
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {loading && (
              <div
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "fit-content",
                  fontSize: "14px",
                  color: "#666"
                }}
              >
                AI is typing...
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #ddd",
              backgroundColor: "white"
            }}
          >
            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                outline: "none",
                fontSize: "14px"
              }}
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              style={{
                marginLeft: "8px",
                padding: "0 15px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#387ed1",
                color: "white",
                cursor: loading
                  ? "not-allowed"
                  : "pointer",
                fontSize: "16px"
              }}
            >
              ➤
            </button>
          </div>

          <div
            style={{
              fontSize: "10px",
              color: "#777",
              textAlign: "center",
              padding: "5px",
              backgroundColor: "white"
            }}
          >
            Educational assistant only. Not investment advice.
          </div>
        </div>
      )}
    </>
  );
}

export default AIChatbot;
