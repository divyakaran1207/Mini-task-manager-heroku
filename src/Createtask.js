import React from "react";
import axios from "axios";
import { HEADER } from "./App";
import { Button } from "@mui/material";

function Createtask() {

  function createtask(e) {
    e.preventDefault();
    let body = new FormData();
    body.append("message", e.target[0].value);
    body.append("due_date", e.target[1].value);
    body.append("priority", e.target[2].value);
    body.append("assigned_to", e.target[3].value);
    /* for (var [key, value] of body.entries()) { 
            console.log(key, value);
          } */
    let i = 0;
    while (i <= 4) {
      e.target[i].value = "";
      i++;
    }
    sendrequest(body);
  }

  function sendrequest(body) {
    axios({
      method: "post",
      url: "https://devza.com/tests/tasks/create",
      headers: HEADER,
      data: body,
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <form onSubmit={createtask}>
        <label htmlFor="message">message:</label>
        <input name="message" type="text" id="message"></input>
        <label htmlFor="due_date">due_date:</label>
        <input name="due_date" type="datetime-local" id="due_date"></input>
        <label htmlFor="priority">priority:</label>
        <select name="priority" id="priority">
          <option value="1">1: normal</option>
          <option value="2">2: mid</option>
          <option value="3">3: high</option>
        </select>
        <label htmlFor="assigned_to">assigned_to:</label>
        <input name="assigned_to" type="number" id="assigned_to"></input>
        <Button variant="contained" color="primary" type="submit">Create task</Button>
      </form>
    </div>
  );
}

export default Createtask;
