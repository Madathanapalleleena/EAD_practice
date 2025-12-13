import { useState } from "react";

export default function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [strength, setStrength] = useState("");

  // --- Your validation function ---
  const validate = (p) => ({
    length: p.length >= 8,
    uppercase: /[A-Z]/.test(p),
    number: /[0-9]/.test(p),
    special: /[^A-Za-z0-9]/.test(p)
  });

  // --- Your strength function ---
  const getStrength = (p) => {
    const v = validate(p);
    const score = v.length + v.uppercase + v.number + v.special;

    if (score <= 2) return "Weak";
    if (score === 3) return "Medium";
    return "Strong";
  };
  const handlePassword=(e)=>{
    const p=e.target.value;
    setPassword(p);
    setStrength(getStrength(p));
  }
  return(
    <div>
        <h2>Password Checker</h2>
        <input type='password' value={password} placeholder='Enter Password'
        onChange={handlePassword}/>
        <br/><br/>
        <input type='password' value={confirm} placeholder='Confirm Password'
        onChange={(e)=>setConfirm(e.target.value)}/>
        <br/><br/>
        <div>Password Strength: {strength}</div>
        <div>
            {confirm.length>0 && (password===confirm?'Passwords Match':'Passwords Do Not Match')}
        </div>
    </div>
  )
}
