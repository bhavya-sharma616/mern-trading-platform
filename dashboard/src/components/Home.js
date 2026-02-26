import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

axios.defaults.withCredentials = true;

const Home = () => {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    // verify cookie
    axios
      .post("https://mern-trading-platform-j9bk.onrender.com/")
      .then((res) => {
        if (res.data.status) {
          setUser(res.data.user);
        }
      })
      .catch(console.error)
      
  }, []);

  
  

  return (
    <>
      <TopBar user={user} />
      <Dashboard />
    </>
  );
};

export default Home;
