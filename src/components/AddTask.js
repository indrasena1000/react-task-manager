import { useState } from "react";

const AddTask = (props) => {

  const [inputs, setInputs] = useState({
    id: "",
    text: "",
    day: "",
    reminder: false,
  }); 
  
  const addData = (e) => {
    e.preventDefault();
    if (!inputs.text) {
      alert("task title required");
      return;
    }
    props.addTask(inputs);
    setInputs({
      id: "",
      text: "",
      day: "",
      reminder: false,
    });
  };
  // const [text,setText] =useState('')
  // const [day,setDay] = useState('')
  // const [reminder,setReminder] = useState(false)
  return (
    <form className="add-form" onSubmit={addData}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={inputs.text}
          onChange={(e) => setInputs({ ...inputs, text: e.target.value })}
          placeholder="add task"
        ></input>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          value={inputs.day}
          onChange={(e) => setInputs({ ...inputs, day: e.target.value })}
          placeholder="add Day & Time"
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={inputs.reminder}
          onChange={(e) => setInputs({ ...inputs, reminder: e.target.checked })}
        ></input>
      </div>
      <input className="btn btn-block" type="submit" value="save task" />
    </form>
  );
};

export default AddTask;
