
import { useRef } from 'react';
import './style.css'
interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent)=> void;
}
export const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input_form' onSubmit={e =>{
      handleAdd(e);
      inputRef.current?.blur();
      }}>
      <input type="input" placeholder='Enter a task' className='input_box' 
        value={todo} ref={inputRef} onChange={e=>setTodo(e.target.value)}/>
      <button className='input_submit' type='submit'>Go</button>

      
    </form>
  )
}
