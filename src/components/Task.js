import React from "react";
import { FaTimes } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react/cjs/react.development";
import AddTask from "./AddTask";

const Task = ({ task, deleteTask, onToggle, onEdit, showAddTask, addTask }) => {
  //const [edit, setEdit] = useState(false);
const onEditt=()=>{
    
}
  return (
    <>
      {showAddTask ? <AddTask 
                      addTask={addTask} 
                      
                      /> : ""}
      <div
        onDoubleClick={() => onToggle(task.id)}
        className={`task ${task.reminder ? "reminder" : ""}`}
      >
        <h3>
          {task.text}
          <AiFillEdit
            onClick={() => onEdit(task)}
            style={{ cursor: "pointer" }}
          />
          <FaTimes
            onClick={(e) => deleteTask(task.id)}
            style={{ color: "red" }}
          />
        </h3>
        <p>{task.day}</p>
      </div>
    </>
  );
};
export default Task;
