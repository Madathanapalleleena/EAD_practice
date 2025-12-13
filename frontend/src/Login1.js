import React, { useState } from 'react';

export default function Login1() {
  const [username, setUsername] = useState('');
  const [msg, setMsg] = useState('');

  const login = async () => {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    });
    const data = await res.json();
    localStorage.setItem("token", data.token);
    setMsg("Logged in as " + username);
  };

  const getHome = async () => {
    const res = await fetch('http://localhost:5000/home', {
      headers: { Authorization: localStorage.getItem("token") }
    });
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <button onClick={login}>Login</button>
      <button onClick={getHome}>Protected Route</button>
      <p>{msg}</p>
    </div>
  );
}
