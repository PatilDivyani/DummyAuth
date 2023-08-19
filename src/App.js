import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  //user has logged in successfully
  const handleLogin = () => {
    console.log("Yes Logged In successfully");
    setIsLoggedIn(true);
  };

  //erase all saved data
  const handleLogOut = () => {
    console.log(" Logged OUT");
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Profile handleLogOut={handleLogOut} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
