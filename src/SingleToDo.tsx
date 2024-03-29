import React, { useRef, useState } from 'react'
import { ToDo } from './model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import './style.css'

interface Props {
    todo: ToDo;
    todos: ToDo[];
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
export const SingleToDo = ({todo, todos, setTodos}:Props) => {

    const [ edit, setEdit] = useState<boolean>(false);
    const [ editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id:number) =>  {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
      };

    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((data)=>data.id !== id)
        );
    }

    const handaleEdit = (e: React.FormEvent, id:number) => {
        e.preventDefault();
        setTodos(todos.map(todo=> (
            todo.id === id ? {...todo, todo: editTodo}: todo
        )));
        setEdit(false);
    }
  return (
        <form className='todos_single' onSubmit={(e)=>handaleEdit(e,todo.id)}>
            
            {
                edit ? (
                    <input
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todos__single--text"
                    ref={inputRef}
                  />
                ) : (
                    todo.isDone ? (
                        <s className='todos_single--text'>{todo.todo}</s>
                    ):
                    (
                         <span className='todos_single--text'>{todo.todo}</span>
                    )
                )
            }
           
            <div>
                <span className='icon' onClick={()=>{
                    if( !edit && !todo.isDone){
                        setEdit(!edit)
                    }
                    }}> 
                    <AiFillEdit /> 
                </span>
                <span className='icon' onClick={()=>handleDelete(todo.id)}> <AiFillDelete/> </span>
                <span className='icon' onClick={()=>handleDone(todo.id)}> <MdDone /> </span>
            </div>
        </form>
  )
}
