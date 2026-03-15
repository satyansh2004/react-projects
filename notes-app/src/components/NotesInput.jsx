import React from "react";

function NotesInput({ handleAdd, textInput, handleTextOnchange }) {
  return (
    <>
      <form
        action=""
        className="w-full flex flex-col border border-default rounded-md p-3"
        onSubmit={handleAdd}
      >
        <textarea
          id="notes"
          className="p-3 px-4 border border-1 border-gray-600 rounded-md text-gray-800 bg-white w-full"
          rows={10}
          placeholder="Enter your notes here"
          value={textInput}
          onChange={handleTextOnchange}
        />
        <div>
          <button
            type="submit"
            className="text-md border-0 rounded-md mt-2 cursor-pointer bg-[#1a73e8] hover:bg-[#1765cc] text-white px-7 py-2"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default NotesInput;
