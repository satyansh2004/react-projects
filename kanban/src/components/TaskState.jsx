import React from "react";
import Task from "./Task";
import "../App.css";
import { Droppable, Draggable } from "@hello-pangea/dnd";

function TaskState({ allTask, headingBg,  stateHeading}) {
  return (
    <>
      <div className="w-[95%] md:w-[60%] lg:w-[22%] rounded-xl">
        <h2
          className={`text-lg text-white ${headingBg} p-[5px] px-2 px-4 rounded-t-md`}
        >
          {stateHeading}
        </h2>
        <Droppable droppableId="Root" type="Todos">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="scrollbar p-3 flex flex-col gap-3 bg-[#31314f] rounded-b-md min-h-[300px] max-h-[350px] overflow-y-scroll"
            >
              {allTask.map((task, index) => (
                <Draggable draggableId={task.id} key={task.id} index={index}>
                  {(provided) => (
                    <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                      <Task value={task.task}/>
                      {console.log(task.id)}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
}

export default TaskState;
