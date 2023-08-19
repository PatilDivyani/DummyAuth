import React, { useState } from "react";

function Login({onLogin}) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

console.log(error)

const fetchAPI = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
console.log('data is fetched' , data)
console.log('Login with username', username)
console.log(password)

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        onLogin();
      } else {
        setError(data.error);
      }
    } catch (error) {
        console.log(error)
      console.error('Error:', error);
    }
  };


  return (
    <div className="signIn">
      <p>Welcome back! 👋</p>
      <h3 className="signIn-title">Sign in to your account</h3>
      <form className="displayBox" onSubmit={fetchAPI}>
        <label>Your username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
          required
        />

        <button type="submit" className="btn">
          CONTINUE
        </button>
      </form>
      <p className="forgetPassword">Forget your password?</p>
    </div>
  );
}

export default Login;
