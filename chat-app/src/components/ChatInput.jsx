import React from "react";

function ChatInput({ handleSubmit, handleInputChange, input }) {

  return (
    <form
      action=""
      className="flex flex-row gap-2 fixed bottom-0 left-1/2 -translate-x-1/2 w-[95%] md:w-2/3 lg:w-1/2 bg-white py-4 px-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="chatinput"
        id="chatinput"
        placeholder="Start the conversation"
        className="p-3 px-5 border border-primary rounded-4xl text-md w-4/5"
        value={input}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="p-2 bg-gray-800 text-white rounded-4xl hover:bg-gray-700 transition flex items-center justify-center w-1/5 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12l14-7-7 14-2-5-5-2z"
          />
        </svg>
      </button>
    </form>
  );
}

export default ChatInput;
