import Login from "./Container/login";
import { Context } from "./Container/context";
import { useState } from "react";
import Profile from "./Container/profile";
function App() {
  const [username, setUsername] = useState({});
  const [showprofile, setShowprofile] = useState(false);

  return (
    <Context.Provider
      value={{ username, setUsername, showprofile, setShowprofile }}
    >
      {showprofile ? <Profile /> : <Login />}
    </Context.Provider>
  );
}

export default App;
