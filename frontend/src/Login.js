import {useState} from 'react';
export default function Login(){
    const [username,setUsername]=useState('');
    const [ password,setPassword]=useState('');
    const [msg,setMsg]=useState('');

    const user='admin';
    const pass='1234';
   const handleLogin=(e)=>{
    e.preventDefault();
    if(username===user && password===pass){
        setMsg('Login Successful');
    }   else{
        setMsg('Login Failed');
    }
   }
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type='usename' value={username} placeholder='Enter Username'
                onChange={(e)=>setUsername(e.target.value)}/>
                <br/><br/>
                <input type='password' value={password} placeholder='Enter Password'
                onChange={(e)=>setPassword(e.target.value)}/>
                <br/><br/>
                <button type='submit'>Login</button>
                <br/><br/>
                <div>{msg}</div>
            </form>
        </div>
    )
}