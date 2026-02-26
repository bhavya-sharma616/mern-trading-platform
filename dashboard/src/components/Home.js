import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Login from "./Login";

axios.defaults.withCredentials = true;

const Home = () => {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

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
      .finally(() => setChecked(true));
  }, []);

  if (!checked) return <p>Checking authentication...</p>;
  if (!user) {
    return <Login onSuccess={(u) => setUser(u)} />;
  }

  return (
    <>
      <TopBar user={user} />
      <Dashboard />
    </>
  );
};

export default Home;
