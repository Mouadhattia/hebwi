import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Userlist from './Compenents/Userlist';


function App() {
  const [users, setUsers] = useState([]);
  const [ping, setPing] = useState(false);
  useEffect(() => {
    let x = axios.get("http://localhost:5000/api/user/");
    setUsers(x)
  }, [ping]);
  console.log(users)
  return (
    <div className="App">
     <Userlist setPing={setPing} ping={ping}/>
     
    </div>
  );
}

export default App;
