import React, { useEffect, useRef, useState } from "react";
import NotesInput from "./components/NotesInput";
import Notes from "./components/Notes";
function App() {
  const [note, setNote] = useState("");


  const [allNotes, setAllNotes] = useState(() => {
    const saved = localStorage.getItem("notes")
    return saved ? JSON.parse(saved) : []
  });


  const [darkMode, setDarkMode] = useState(() => {
    const saveTheme = localStorage.getItem("theme");
    return saveTheme ? JSON.parse(saveTheme) : true;
  });

  const isNoteValid = note.length !== 0;

  const handleAdd = (e) => {
    e.preventDefault();
    if (isNoteValid) {
      setAllNotes((a) => [...a, note]);
      setNote("");
    }
  };
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(allNotes)) || []
  }, [allNotes])
  
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode)) || true
  }, [darkMode])

  const handleTextOnchange = (e) => {
    setNote(e.target.value);
  };


  const handleDelete = (index) => {
    setAllNotes(JSON.parse(localStorage.getItem("notes")).filter((_, i) => i !== index));
    localStorage.setItem("notes", JSON.stringify(allNotes)) || []
  };

  const headingRef = useRef()

  const handleTheme = () => {
    if (darkMode) {
      document.body.style.backgroundColor = "#111827";
      document.body.style.color = "white";
      headingRef.current.style.color = "White"
      setDarkMode(false);
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      headingRef.current.style.color = "black"
      setDarkMode(true);
    }
  };


  return (
    <>
      <h1 ref={headingRef} className="text-xl font-semibold mt-10 text-center text-black">
        Notes App
      </h1>
      <div className="w-[90%] md:w-2/3 lg:w-1/2 mx-auto my-5 flex flex-col gap-4">
        <NotesInput
          handleAdd={handleAdd}
          handleTextOnchange={handleTextOnchange}
          textInput={note}
        />
        <p>Notes will be displayed here</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allNotes.map((elem, index) => (
            <Notes
              key={index}
              displayNotes={elem}
              handleDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute top-2 right-2 p-2 rounded-lg border-1 border-gray-600 cursor-pointer"
        onClick={handleTheme}
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-moon-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-brightness-high-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
          </svg>
        )}
      </button>
    </>
  );
}

export default App;
