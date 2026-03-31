import React from "react";
import "../App.css";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import Task from "./Task";

function TaskState({ headingBg,  stateHeading}) {
  return (
    <>
      <div className="w-[95%] md:w-[60%] lg:w-[22%] rounded-xl">
        <h2
          className={`text-lg text-white ${headingBg} p-[5px] px-2 px-4 rounded-t-md`}
        >
          {stateHeading}
        </h2>
        <Droppable droppableId="Working" type="WorkingTodo">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="scrollbar p-3 flex flex-col gap-3 bg-[#31314f] rounded-b-md min-h-[300px] max-h-[350px] overflow-y-scroll"
            >
              {/* {allTask.map((task, index) => (
                <Draggable draggableId={task.id} key={task.id} index={index}>
                  {() => (
                    <div>
                      <Task value={task.task}/>
                    </div>
                  )}
                </Draggable>
              ))} */}
        <Task value="Working Task" />
        <Task value="Working Task" />
        <Task value="Working Task" />

            </div>
          )}
        </Droppable>
      </div>
    </>
  );
}

export default TaskState;
