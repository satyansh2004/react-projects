import { useEffect, useState } from "react";
import "./App.css";
import TaskState from "./components/TaskState";
import WorkingState from "./components/WorkingState";
import AddInput from "./components/AddInput";

import { DragDropContext } from "@hello-pangea/dnd";
function App() {
  const [task, setTask] = useState("");
  const [id, setId] = useState("");

  const [allTasks, setAllTasks] = useState([
    {id: "10", task: "1st Task"},
    {id: "20", task: "2nd Task"},
    {id: "30", task: "3rd Task"},
  ]);

  const handleOndragEnd = (e) => {
    console.log(e)

    if(e.destination == "null") return

    if(e.destination.droppableId == e.source.droppableId && e.source.index == e.destination.index) {
      return;
    }

    if(e.type == "Todos") {
      const redorderd = [...allTasks];

      const indexOfItem = e.source.index;
      const destinationIndexOfItem = e.destination.index;

      const [removedItem] = redorderd.slice(indexOfItem, 1);
      redorderd.splice(destinationIndexOfItem, 0, removedItem)
      
      return setAllTasks(redorderd)
    }

  };

  const handleOnchange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let strId = Date.now.toString()

    if (task.length != 0) {
      setAllTasks([...allTasks, { id: id, task: task }]);
      setTask("");
      setId(strId)
    }
  };

  useEffect(() => {
    window.document.body.style.backgroundColor = "#181b35";
  }, []);

  return (
    <>
      <h1 className="text-2xl text-white mt-5 mb-3 mx-auto text-center">
        Kanban App
      </h1>
      <AddInput
        handleSubmit={handleSubmit}
        handleOnchange={handleOnchange}
        inputText={task}
      />
      <DragDropContext onDragEnd={handleOndragEnd}>
        <div className="w-full flex flex-col items-center lg:flex-row mx-auto lg:justify-evenly p-2 gap-5 lg:gap-0 mb-4">
          <TaskState
            headingBg="bg-[#ffcc00]"
            stateHeading="Todos"
            allTask={allTasks}
          />
          <WorkingState headingBg="bg-[#fbab3e]" stateHeading="Working on it" />
          {/* <TaskState headingBg="bg-[#764acf]" stateHeading="In review" /> */}
          {/* <TaskState headingBg="bg-[#00c874]" stateHeading="Done" /> */}
        </div>
      </DragDropContext>
    </>
  );
}

export default App;
