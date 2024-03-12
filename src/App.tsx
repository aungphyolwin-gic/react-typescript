import React, { useState } from 'react';
import './App.css';
import { InputField } from './InputField';
import { ToDo } from './model';


function App() {
  const [ todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent):void => {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    // console.log(todos)
  };

  
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd}/>

      {todos.map(data => (
        <li>{data.todo}</li>
      ))}
    </div>
  );
}

export default App;
