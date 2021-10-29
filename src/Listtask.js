import React, { useState , useEffect} from "react";
import axios from "axios";
import { HEADER } from "./App";
import TaskCard from "./TaskCard";
import "./Taskcard.css";
import Priority1 from "./Priority1";
import Priority2 from "./Priority2";
import Priority3 from "./Priority3";
import { Button } from "@mui/material";

function Listtask() {
 
  const [task, settask] = useState([]);
  const [arr, setarr] = useState([]);

  function gettasks() {
    axios
      .get("https://devza.com/tests/tasks/list", { headers: HEADER })
      .then((res) => {
        console.log(res);
        settask(res.data.tasks);
        })
      .catch((err) => console.error(err));
  }

  function showtasks() {
    setarr(task);
  }

  function filteringpriority(e) {
    let filteredpriority = task.filter(tofilter1);
    function tofilter1(taskinfo) {
      if (taskinfo.priority === e.target.value) {
        return true;
      } else {
        return false;
      }
    }
    console.log(e.target.value, "this is priority");
    settingarr(filteredpriority);
  }

  function filteringdate(e) {
    let filtereddate = task.filter(tofilter2);
    function tofilter2(taskinfo) {
      if (taskinfo.created_on <= e.target.value) {
        return true;
      } else {
        return false;
      }
    }
    console.log(e.target.value, "this is date");
    settingarr(filtereddate);
  }

  function settingarr(filter) {
    setarr(filter);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={gettasks}>Get tasks</Button>
      <Button variant="contained" color="primary" onClick={showtasks}>Show tasks</Button>
      <Button variant="contained" color="primary" onClick={() => setarr([])}>Hide tasks</Button>
      
      <form onChange={filteringpriority} >
      <label htmlFor="priority2">Filter by priority: </label>
        <select name="priority" id="priority2">
          <option value="1">1: normal</option>
          <option value="2">2: mid</option>
          <option value="3">3: high</option>
        </select>
      </form>
      <form onChange={filteringdate}>
        <label htmlFor="date2">Filter by Created on or before date:</label>
        <input name="created_on" type="datetime-local" id="date2"></input>
      </form>
      <div className="Taskcards">
      {arr.map((taskinfo) => {
            return <TaskCard key={taskinfo.id} allinfo={taskinfo} />;
          })}
      </div>
      <h2>Drag and drop the task from one column to another to change it's priority</h2>
      <div className="priority-tasks">
        <Priority1 task={task} gettasks={gettasks}/>
        <Priority2 task={task} gettasks={gettasks}/>
        <Priority3 task={task} gettasks={gettasks}/>
        
      </div>
      
    </div>
  );
}

export default Listtask;
