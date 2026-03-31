import React from "react";

function AddInput({ handleSubmit, handleOnchange, inputText }) {
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-between gap-3 mx-auto w-[95%] md:w-[64%] my-10 items-center"
      >
        <input
          onChange={handleOnchange}
          value={inputText}
          type="text"
          className="py-3 px-4 text-md border-0 rounded-md w-full md:w-3/4 bg-white text-black"
          placeholder="Enter your tasks here"
        />
        <button
          type="submit"
          className="py-3 px-4 text-md border-0 rounded-md w-full md:w-1/4 bg-[#3c3f59] border border-[#3c3f59] cursor-pointer text-[#f1f1f1]"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default AddInput;
