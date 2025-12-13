import { useState } from "react";

export default function StudentList() {
  const students = [
    { name: "Leena", marks: 95 },
    { name: "Rithwik", marks: 88 },
    { name: "Sesh", marks: 92 },
    { name: "Rahul", marks: 85 },
    { name: "Ananya", marks: 90 },
    { name: "Vishnu", marks: 84 },
    {name: "Aisha", marks: 91},
    { name: "Karan", marks: 87 }
  ];
  const [page,setPage]=useState(1);
  const studentList=students.slice((page-1)*3,page*3);
  return(
    <div>
      <h2>Student List</h2>
      {studentList.map((s,i)=>(
        <p >
          {s.name} : {s.marks}
        </p>
      ))}
      <button onClick={()=> setPage(page-1)} disabled={page===1}>Previous</button>
      <button onClick={()=>setPage(page+1)} disabled={page*3>=students.length}>Next</button>
    </div>
  )
}
