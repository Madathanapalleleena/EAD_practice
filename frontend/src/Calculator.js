import {useState} from 'react';
export default function Calculator(){
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [op,setOp]=useState('add');
    const [result,setResult]=useState(0);
    const calculate=async(e)=>{
        e.preventDefault();
        const res=await fetch(`http://localhost:5000/api/calc/${op}?num1=${num1}&num2=${num2}`);
        const data=await res.json();
        if (data.message){
            setResult(data.message);
        }else{
            setResult(data.result);
        }

    }
    return (
        <div>
            <h2>Calculator</h2>
            <input type='number' value={num1} placeholder='Enter first number'
            onChange={(e)=>setNum1(e.target.value)}
            />
            <br/>
            <input type='number' value={num2} placeholder='Enter second number'
            onChange={(e)=>setNum2(e.target.value)}
            />
            <br/>
            <select value={op} onChange={(e)=>setOp(e.target.value)}>
                <option value='add'>Add</option>
                <option value='substract'>Substract</option>
                <option value='multiply'>Multiply</option>
                <option value='divide'>Divide</option>
            </select>
            <br/>
            <button onClick={calculate}>Calculate</button>
            <h3>Result: {result}</h3>
        </div>
    )
}