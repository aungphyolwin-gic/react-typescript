import React from 'react';
import './App.css'


let name:string;
let age:number;
let isStudent:boolean;
let hobbies: string[];
let role: [number, string];

// type Person = {
//   name:string;
//   age?: number;
// };

interface Person {
  name: string,
  age: number
}

// function printName(name: string): void{
//   console.log(name)
// }
// printName("APL")
let printName: (name:string)=>void;
printName = ()=> { console.log("Name is " +name);}
printName("AAA");
let person:Person;
person = { name: 'Aung', age: 22}



function App() {
  return (
    <div className="App">
      <span className="heading">Taskify</span>

    </div>
  );
}

export default App;
