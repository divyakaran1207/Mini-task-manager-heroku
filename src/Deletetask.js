import React from "react";
import axios from "axios";
import { HEADER } from "./App";
import { Button } from "@mui/material";

function Deletetask() {
  function deletetask(e) {
    e.preventDefault();
    let body = new FormData();
    body.append("taskid", e.target[0].value);
    e.target[0].value = "";
    axios({
      method: "post",
      url: "https://devza.com/tests/tasks/delete",
      headers: HEADER,
      data: body,
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <form onSubmit={deletetask}>
        <label htmlFor="task_id">Provide task_id of the task to be deleted: </label>
        <input name="task_id" id="task_id" type="number"></input>
        <Button variant="contained" color="error" type="submit">Delete task</Button>
      </form>
    </div>
  );
}

export default Deletetask;
