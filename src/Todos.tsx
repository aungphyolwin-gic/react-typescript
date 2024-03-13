import React from 'react'
import { ToDo } from './model';
import { SingleToDo } from './SingleToDo';

interface Props{
    todos: ToDo[];
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export const Todos = ({todos, setTodos}:Props) => {
  return (
    <div className='todos'>
        {
            todos.map(data => (
                <SingleToDo todo={data} todos={todos} setTodos = {setTodos} />
            ))
        }
    </div>
  )
}
