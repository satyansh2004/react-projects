import React, { useState } from "react"
import ChatInput from "./components/ChatInput"
import Chats from "./components/Chats"
import RoboChat from "./components/RoboChat"

function App() {

  const [input, setInput] = useState("");

  const [chat, setChat] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim().length != 0) {

      setChat(c => [...c, {
        message: input,
        role: "user"
      }])

      setInput("")

      const response = Chatbot.getResponse(input)

      setChat(c => [...c, {
        message: response,
        role: "robo"
      }])
    }
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <>
    <div className="w-[95%] md:w-2/3 lg:w-1/2 mx-auto my-10 mb-23">
      <div className="chats flex flex-col gap-4">
        {chat.map((item, index) => (
          item.role == "user" 
          ? <Chats key={index} userInput={item.message}/>
          : <RoboChat key={index} roboInput={item.message}/>
        ))}
      </div>
      <ChatInput handleSubmit={handleSubmit} input={input} handleInputChange={handleInputChange}/>
    </div>
    </>
  )
}

export default App
