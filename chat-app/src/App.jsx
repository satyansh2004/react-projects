import React from "react"
import ChatInput from "./components/ChatInput"
import Chats from "./components/Chats"
import RoboChat from "./components/RoboChat"

function App() {

  return (
    <>
    <div className="w-[95%] md:w-2/3 lg:w-1/2 mx-auto my-10 mb-23">
      <div className="chats flex flex-col gap-4">
        <Chats />
        <RoboChat />
        <Chats />
        <RoboChat />
        <Chats />
        <RoboChat />
        <Chats />
        <RoboChat />
        <Chats />
        <RoboChat />
        <Chats />
        <RoboChat />
      </div>
      <ChatInput />
    </div>
    </>
  )
}

export default App
