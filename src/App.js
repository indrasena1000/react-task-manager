import { useState } from "react";
import Header from "./components/Header";
// import AddTask from "./components/AddTask";
import Task from "./components/Task";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "test",
      day: "oct 12 4:46 pm",
      reminder: false,
    },
    {
      id: "2",
      text: "test2",
      day: "oct 12 4:46 pm",
      reminder: false,
    },
  ]);

  //Delete Tasks
  const deleteTask = (id) => {
    //e.preventDefault()
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
  };

  //remainder
  const toggleReminder = (id) => {
    console.log("intggl;e");
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(id);
  };

  //showAddTask
  const ShowAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  //edittask
  const editTask = (task) => {
    console.log(task);
    setShowAddTask((prevState) => !prevState);
    
  };

  //addtask

  const addTask = (task) => {
    task.id = Date.now();
    setTasks([...tasks, task]);
  };

  return (
    <div className="container">
      <Header onshowAddTask={ShowAddTask} showAddTask={showAddTask} />
      {/* {showAddTask ? <AddTask addTask={addTask} /> : ""} */}

      {tasks.length > 0
        ? tasks.map((task) => (
            <Task
              task={task}
              deleteTask={deleteTask}
              onToggle={toggleReminder}
              onEdit={editTask}
              showAddTask={showAddTask}
              addTask={addTask}
            />
          ))
        : "No tasks left"}
    </div>
  );
}

export default App;
