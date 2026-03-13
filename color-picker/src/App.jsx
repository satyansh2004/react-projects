import React, { useEffect, useRef, useState } from "react";

function App() {

  const [color, setColor] = useState("");

  const bgRef = useRef()

  const handleColorInput = (e) => {
    setColor(e.target.value)
  }

  useEffect(() => {
    bgRef.current.style.backgroundColor = color
  }, [color])

  return (
    <>
      <div className="my-5 mx-auto w-1/2 md:w-2/3 p-4 border border-1 border-gray-300 shadow-md rounded-md flex flex-col gap-3 items-center justify-center">
        <h1 className="text-center font-semibold text-xl">Color Picker</h1>
        <div ref={bgRef} className="displayColor bg-red-300 h-[300px] w-[300px] flex items-center justify-center rounded-lg">
          <p className="text-center  text-2xl">Color: {color}</p>
        </div>
        <input
          type="color"
          name="color"
          id="color"
          className="cursor-pointer h-[50px] w-[100px] border-0"
          value={color}
          onChange={handleColorInput}
        />
      </div>
    </>
  );
}

export default App;
