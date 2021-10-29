import React,{useState} from "react";
import "./Taskcard.css";
import axios from "axios";
import { HEADER } from "./App";
import UserCard from "./UserCard";
import { Button } from '@mui/material';

function Listuser() {
  const [user, setuser] = useState([])

  function getUsers() {
    axios({
      method: "get",
      url: "https://devza.com/tests/tasks/listusers",
      headers: HEADER,
    })
      .then((res) => {setuser(res.data.users)})
      .catch((err) => console.error(err));
  }

  function hideusers(res){
    setuser([])
    
  }

  return (
    <div className="usercontainer">
      <Button variant="contained" color="secondary" onClick={getUsers}>Get users</Button>
      <Button variant="contained" color="primary" onClick={hideusers}>Hide users</Button>
      <div className="allusers">
      {user.map(userinfo=>{
        return <UserCard key={userinfo.id} id={userinfo.id} name={userinfo.name} picture={userinfo.picture}/>
      })}
      </div>
    </div>
  );
}

export default Listuser;
