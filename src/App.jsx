import React, { useState, useEffect } from 'react';
import './App.css';
import { students } from "./utils/util"
import StudentsTable from "./components/StudentsTable"

function App() {
  const [ studentsData, setStudentsData ] = useState([])
  const [ studentsTotalMarks, setStudentsTotalMarks ] = useState(0)
  const [ showTable, setShowTable ] = useState(true)

  const addGradeToStudents = () => {
    let sum = 0
    students.forEach(student => { 
      sum += student.marks  
      student.marks > 90 ? student['grade'] = 'A' :
        (student.marks > 50 && student.marks <= 90 ? student['grade'] = 'B': student['grade'] = 'F')
    });
    setStudentsData(students)
    setStudentsTotalMarks(sum)
  }

  useEffect(() => {
    // adding grades to students
    addGradeToStudents()
  }, [])

  
  const sortStudents = () => {
    let studentsInfo = students
    studentsInfo.sort((a, b) => {
      return a.marks > b.marks
    })
    return studentsInfo
  }

  const studentsWithAGrade = () => {
    let studentsInfo = students
    return studentsInfo.filter((value) => value.grade === "A")
  } 
  
  const studentsWithBGrade = () => {
    let studentsInfo = students
    return studentsInfo.filter((value) => value.grade === "B")
  } 

  const studentsWithFGrade = () => {
    let studentsInfo = students
    return studentsInfo.filter((value) => value.grade === "F")
  } 


  const studentsWithOtherThanFGrade = () => {
    let studentsInfo = studentsData
    return studentsInfo.filter((value) => {
      return value.grade === 'F' ? false : true 
    })
  }

  
  const handleButtonClick = () => {
    setShowTable(!showTable)
  } 
  
  return (
    <div className="App">
     {
      showTable ?
        <div>
          <button onClick={handleButtonClick}>Show Details</button>
          <StudentsTable studentsData={studentsData}/>
        </div>  
           :
       <div>
        <button onClick={handleButtonClick}>Go Back to Table</button>
        <p>Students with A Grade</p>
        <ul>
          {studentsWithAGrade().map((student) => (
            <li>{student.name}</li>
          ))}
        </ul>  
        <p>Students with B Grade</p>
        <ul>
          {studentsWithBGrade().map((student) => (
            <li>{student.name}</li>
          ))}
        </ul>  
        <p>Students with F Grade</p>
        <ul>
          {studentsWithFGrade().map((student) => (
            <li>{student.name}</li>
          ))}    
        </ul>
        <p>Total Marks Secured by Students: {studentsTotalMarks}</p>
        <p>Students Sorted in Ascending order of their marks</p>
        <ul>
          {sortStudents().map((student) => (
            <li>{student.name}</li>
          ))}    
        </ul>
        <p>Filered Students list with who scored other than F Grade</p>
        <ul>
          {studentsWithOtherThanFGrade().map((student) => (
            <li>{student.name}</li>
          ))}    
        </ul>
       </div>
     }
    </div>
  );
}

export default App;
