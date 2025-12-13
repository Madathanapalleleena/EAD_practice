import {useState} from 'react';
export default function RegisterForm(){
  const [username,setUsername ]=useState('');
  const[password,setPassword]=useState('');
  const [msg,setMsg]=useState('');
  const handleRegister=async(e)=>{
    e.preventDefault();
    try{
          const res=await fetch('http://localhost:5000/register',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({username,password})
    });
    const data=await res.json();
    setMsg(data.message);
    }catch(err){
      setMsg('Error registering user');
    }

  }
  return(
    <div>
      <h2>Register form</h2>
      <form onSubmit={handleRegister}>
        <input type='username' value={username} placeholder='enter username'
        onChange={(e)=>setUsername(e.target.value)}
        />
        <br/>
        <input type='password' value={password} placeholder='enter password'
        onChange={(e)=>setPassword(e.target.value)}
        />
        <br/>
        <button type='submit'>Register</button>
        </form>
        <div>{msg}</div>
    
    </div>
  )
}