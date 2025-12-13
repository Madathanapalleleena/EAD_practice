const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const SECRET_USERS = ["alice", "bob"]; // simple "DB"

// Middleware to check if user exists
function authMiddleware(req, res, next) {
    const { username } = req.body;
    if (SECRET_USERS.includes(username)) {
        next(); // user exists, continue
    } else {
        res.status(401).json({ message: "Unauthorized user" });
    }
}

// Login route
app.post('/login', authMiddleware, (req, res) => {
    res.json({ message: `Welcome, ${req.body.username}!` });
});

app.listen(5000, () => console.log("Server running on port 5000"));





import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [msg, setMsg] = useState('');

  const login = async () => {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    });

    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div>
      <h2>Login Example with Middleware</h2>
      <input 
        placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <button onClick={login}>Login</button>
      <p>{msg}</p>
    </div>
  );
}
