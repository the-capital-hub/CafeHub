
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Sparkles,
  X,
  Send,
  Coffee,
  ArrowUpRight,
  Bot,
} from "lucide-react";

import "./AIAssistant.css";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hey there! Welcome to CafeHub. ☕ How can I make your cafe experience special today?",
    },
  ]);

  const suggestions = [
    "Show me your menu",
    "What should I try?",
    "Book a table",
  ];

  const handleSend = (text = message) => {
    if (!text.trim()) return;

    const userMessage = {
      role: "user",
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    setTimeout(() => {
      let reply =
        "That sounds lovely! Our team would be happy to help you. You can explore our menu or contact our cafe for more details.";

      const lowerText = text.toLowerCase();

      if (lowerText.includes("menu")) {
        reply =
          "We have freshly brewed coffee, masala chai, kulhad chai, burgers, sandwiches, pizzas, momos, waffles and delicious desserts! Visit our menu page to explore.";
      } else if (
        lowerText.includes("recommend") ||
        lowerText.includes("try")
      ) {
        reply =
          "My recommendation? Try our signature cold coffee with a delicious brownie. For something Indian, our masala chai and paneer sandwich make a wonderful combination!";
      } else if (
        lowerText.includes("book") ||
        lowerText.includes("table")
      ) {
        reply =
          "We would love to host you! Head over to our reservation page to reserve your table.";
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: reply,
        },
      ]);
    }, 700);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="ai-floating-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open CafeHub AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={25} />
            </motion.span>
          ) : (
            <motion.span
              key="sparkles"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Sparkles size={25} />
            </motion.span>
          )}
        </AnimatePresence>

        {!isOpen && <span className="ai-button-pulse" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ai-chat-window"
            initial={{ opacity: 0, y: 25, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.94 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header */}
            <div className="ai-chat-header">
              <div className="ai-header-info">
                <div className="ai-avatar">
                  <Coffee size={21} />
                  <span />
                </div>

                <div>
                  <h3>CafeHub Assistant</h3>
                  <p>
                    <span className="ai-online-dot" />
                    Here for your perfect moment
                  </p>
                </div>
              </div>

              <button
                className="ai-close-button"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
              >
                <X size={19} />
              </button>
            </div>

            {/* Welcome */}
            <div className="ai-chat-intro">
              <span className="ai-intro-icon">
                <Sparkles size={15} />
                YOUR PERSONAL CAFE GUIDE
              </span>

              <h2>A little help,<br />a lot of good vibes.</h2>

              <p>
                Ask me about our menu, recommendations or reservations.
              </p>
            </div>

            {/* Messages */}
            <div className="ai-messages">
              {messages.map((item, index) => (
                <div
                  key={index}
                  className={`ai-message-row ${item.role}`}
                >
                  {item.role === "assistant" && (
                    <div className="ai-message-avatar">
                      <Bot size={16} />
                    </div>
                  )}

                  <div className="ai-message-bubble">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="ai-suggestions">
                <span>QUICK QUESTIONS</span>

                {suggestions.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleSend(item)}
                  >
                    {item}
                    <ArrowUpRight size={14} />
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              className="ai-chat-input"
              onSubmit={(event) => {
                event.preventDefault();
                handleSend();
              }}
            >
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Ask me anything..."
                aria-label="Your message"
              />

              <button
                type="submit"
                disabled={!message.trim()}
                aria-label="Send message"
              >
                <Send size={17} />
              </button>
            </form>

            <div className="ai-chat-footer">
              <Sparkles size={12} />
              Powered by CafeHub Intelligence
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
