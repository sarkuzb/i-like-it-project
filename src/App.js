import "./App.css";
import { useState } from "react";

function App() {
  const [sendMessage, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!sendMessage.trim()) return;
    setMessages([...messages, sendMessage]);
    setMessage("");
  };

  return (
    <div className="App">
      <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col border-2 border-slate-400 p-4 rounded-lg">
          <input
            className="outline-none p-1 mb-2 w-56"
            value={sendMessage}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          {messages.map((message, index) => (
            <p
              className="messages inline-block w-56 pl-1 my-2 border-b-2 border-t-2 border-slate-600 bg-gray-100 rounded font-light hover:bg-gray-200 hover:scale-105 transition transform"
              key={index}
            >
              {message}
            </p>
          ))}
          <button
            className="p-1 bg-slate-500 text-gray-100 px-2 mt-2 rounded-lg font-semibold hover:bg-slate-600 active:bg-slate-500 active:scale-95 transition transform"
            onClick={handleSend}
          >
            <span>Send It</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
