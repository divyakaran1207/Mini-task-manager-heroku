import React from "react";
import axios from "axios";
import { HEADER } from "./App";
import { Button } from "@mui/material";

function Updatetask() {
  function updatetask(e) {
    e.preventDefault();
    let body = new FormData();
    body.append("message", e.target[0].value);
    body.append("due_date", e.target[1].value);
    body.append("priority", e.target[2].value);
    body.append("assigned_to", e.target[3].value);
    body.append("taskid", e.target[4].value);
    /* for (var [key, value] of body.entries()) { 
            console.log(key, value);
          } */
    let i = 0;
    while (i <= 4) {
      e.target[i].value = "";
      i++;
    }
    sendrequest(body) 
  }
  function sendrequest(body) {
    axios({
      method: "post",
      url: "https://devza.com/tests/tasks/update",
      headers: HEADER,
      data: body,
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <form onSubmit={updatetask}>
        <label htmlFor="message1">message: </label>
        <input name="message" id="message1" type="text"></input>
        <label htmlFor="due_date1">due_date: </label>
        <input name="due_date" id="due_date1" type="datetime-local"></input>
        <label htmlFor="priority1">priority: </label>
        <select name="priority" id="priority1">
          <option value="1">1: normal</option>
          <option value="2">2: mid</option>
          <option value="3">3: high</option>
        </select>
        <label htmlFor="assigned_to1">assigned_to: </label>
        <input name="assigned_to" id="assigned_to1" type="number"></input>
        <label htmlFor="task_id1">task_id: </label>
        <input name="task_id" id="task_id1" type="number"></input>
        <Button variant="contained" color="primary" type="submit">Update task</Button>
      </form>
    </div>
  );
}

export default Updatetask;
