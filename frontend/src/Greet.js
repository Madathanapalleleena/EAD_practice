import {useState} from 'react';
export default function Greet(){
    const [name,setName]=useState('');
    const [title,setTitle]=useState('');
    const [greeting,setGreeting]=useState('');
    const handleGreet=async(e)=>{
        e.preventDefault();
        const res= await fetch(`http://localhost:5000/greet/${name}?title=${title}`);
        const data=await res.json();
        setGreeting(data.greeting);
    }
    return (
        <div>
            <h2>Greet</h2>
            <input type='text' value={name} placeholder='Enter Name'
            onChange={(e)=>setName(e.target.value)}/>
            <br/><br/>
            <input type='text' value={title} placeholder='Enter Title'
            onChange={(e)=>setTitle(e.target.value)}/>
            <br/><br/>
            <button onClick={handleGreet}>Greet</button>
            <br/><br/>
            <div>{greeting}</div>
        </div>
    )
}