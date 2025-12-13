import {useState} from 'react';
export default function RegisterForm(){
    const [username,setUsername ]=useState('');
    const[password,setPassword]=useState('');
    const [confirm,setConfirm]=useState('');
    const validate=(p)=>({
length:p.length>=8,
uppercase:/[A-Z]/.test(p), 
number:/[0-9]/.test(p),
special:/[^A-Za-z0-9]/.test(p)
    });
    const getStrength=(p)=>{
        const v=validate(p);
        const score=v.length+v.uppercase+v.number+v.special;
        if (score<=2) return 'Weak';
        if (score===3) return 'Medium';
        return 'Strong';
    };
    const s=getStrength(password);
    const rules=validate(password);
    const bordercolor=s==='Weak'?'red':s==='Medium'?'orange': s==='Strong'?'green':'gray';
    return (
        <div>
            <input 
            type='password' value={password} placeholder="enter password"
            onChange={(e)=>setPassword(e.target.value)}
            style={{border:`2px solid ${bordercolor}`}}/>
            {password && (<div> Password Strength: {s}
                <div>Password length is greater than 8: {rules.length?'Yes':'No'} </div>
                <div>Contains Uppercase Letter: {rules.uppercase?'Yes':'No'} </div>
                <div>Contains Number: {rules.number?'Yes':'No'} </div>
                <div>Contains Special Character: {rules.special?'Yes':'No'} </div>
                </div>
                )}
        </div>
    );}
