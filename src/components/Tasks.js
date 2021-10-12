import React from 'react'
import Task from "./Task"
const Tasks = ({tasks,onDelete,onToggle})=>{

 return(
     <>
     {tasks.map(task =>(
        <Task task={task} deleteTask={onDelete} onToggle={onToggle}  />
 ))}
     </>
 )
}

export default Tasks