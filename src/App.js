import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask  from "./components/AddTask";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "test",
      day: "oct 12 4:46 pm",
      remainder:false
    },
    {
      id:"2",
      "text":"test2",
      "day":"oct 12 4:46 pm",
      remainder:false
    }
  ]);

  //Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id!==id))
    console.log("delete", id);
  };


  //remainder
const toggleRemainder = (id)=>{
  setTasks(tasks.map((task)=> task.id==id?{...task,remainder:!task.remainder}:task))
  console.log(id)
}

  return (
    <div className="container">
      <Header />
      {
      tasks.length>0 ?( <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleRemainder}/>):'No tasks left'
      }
<AddTask />

      </div>
  );
}

export default App;
