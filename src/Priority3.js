import React from "react";
import { useDrop } from "react-dnd";
import "./Taskcard.css";
import TaskCard from "./TaskCard";
import axios from "axios";
import { HEADER } from "./App";

function Priority3({ task, gettasks }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => {
      addcard(item.info);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  function addcard(info) {
    console.log(info);
    updatetask(info);
  }

  let filteredpriority = task.filter(tofilter1);
  function tofilter1(taskinfo) {
    if (taskinfo.priority === "3") {
      return true;
    } else {
      return false;
    }
  }

  function updatetask(info) {
    let body = new FormData();
    body.append("message", info.message);
    body.append("due_date", info.due_date);
    body.append("priority", "3");
    body.append("assigned_to", info.assigned_to);
    body.append("taskid", info.id);
    for (var [key, value] of body.entries()) {
      console.log(key, value);
    }

    sendrequest(body);
  }
  function sendrequest(body) {
    axios({
      method: "post",
      url: "https://devza.com/tests/tasks/update",
      headers: HEADER,
      data: body,
    })
      .then((res) => {
        console.log(res);
        gettasks();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="priority3" ref={drop}>
      <h1>Priority 3</h1>
      {filteredpriority.map((taskinfo) => {
        return <TaskCard key={taskinfo.id} allinfo={taskinfo} />;
      })}
    </div>
  );
}

export default Priority3;
