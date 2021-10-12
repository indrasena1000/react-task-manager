import React from 'react';
import {FaTimes} from "react-icons/fa"
const Task = ({task,deleteTask,onToggle})=>{
    return(
        <div onDoubleClick={()=>onToggle(task.id)} className={`task ${task.remainder? 'reminder':''
        }`}>
            
            <h3>{task.text} <FaTimes onClick={()=>deleteTask(task.id)} style={{color:'red'}} /></h3>
            <p>{task.day}</p>

        </div>
    )
}
export default Task