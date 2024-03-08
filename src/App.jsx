// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singer';

function App() {
const Actors=["bappa raj","soriful raj","josim","Rubel","Manna"]
const Singers=[
  {name:"Mahfuzur Rahman",age:65},
  {name:"Eva Rahman",age:35},
  {name:"Suvro dev",age:45}
]
  return (
    <>
      <h1>Vite + React</h1>
      <h1>This is</h1>
      {/* <Todo course="MERN stack" isDone={true}></Todo>
      <Todo course="PHP Laravel" isDone={false} ></Todo>
      <Person></Person>
      <Person></Person>
      <Person></Person> */}
      <Actor name="Sakib khan"></Actor>
      {
        Actors.map(actor=> <Actor name={actor}></Actor>)
      }
      {
        Singers.map(singer=><Singer singer={singer}></Singer>)
      }
     <Student name="iftakhar" className="MBA" age="24" ispassed={true}></Student>
     <Student name="Jenia afrin " className="MBBS" age="21" ispassed={false}></Student>
     <Student name="Ibnat Hamidi" className="English " age="23" ispassed={true}></Student>
     <Developer name="nazmul" profession="jr frontend" salary="100000" isComplete="true" ></Developer>
     <Developer name="iftakhar" profession="jr" salary="3000" isComplete="false"></Developer>

    
      
    </>
  )
}


function Person() {
  const name="iftakhar";
  const age =22;
  const hobbies="programming";
  
  return (
    <h2>My name is {name} my age is {age} and finally my hobbies is {hobbies}</h2>
  )
}
function Student({name,className,age,ispassed}) {
console.log(name,className,age);
  return (
    <div className='student'>
      <h3 >My name is : {name}</h3>
      <p>Class : {className} </p>
      <p>Age : {age}</p>
      {/* <p>Passed:  {ispassed==="true" ? "Its soo tough for me but i will do it Thanks my god" :" its soo tough next time its easy for me "}</p> */}
      <p>{ispassed || "Not passed"}</p>
    </div>
  )
}
function Developer({name,profession,salary,isComplete}) {
  const developerStyle={
    margin :'20px',
    padding :'20px',
    border : '2px solid salmon',
    borderRadius :'20px'

  }
  return (
    <div style={developerStyle}>
      <h2>My name is devu devu {name} </h2>
      <p> My profession is {profession} Coding</p>
      <p>My salary is {salary}</p>
      <p> {isComplete ==="true" ? "My programming hero course is completed" : "I havent enough time for this code soo my course is incomplete"} </p>
    </div>
  )
}
export default App
