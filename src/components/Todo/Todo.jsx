import React from 'react'
import {BsFillTrashFill} from 'react-icons/bs';
import styles from './Todo.module.css';
export default function Todo({todo,onUpdate,onDelete}) {
  const handleChange=e=>{
    const status = e.target.checked? 'completed' : 'active';
    onUpdate({...todo, status})
  }

  const handleDelete=e=>{
    onDelete(todo);
  }
  return (
   <li className={styles.todo}>
    <input className={styles.checkbox}
    type="checkbox" id="checkbox" checked={todo.status==='completed'}
    onChange={handleChange}/>
    <label htmlFor="checkbox" className={styles.text}>{todo.text}</label>
    <span className={styles.icon}>
    <button onClick={handleDelete} className={styles.button}><BsFillTrashFill></BsFillTrashFill></button>

    </span>
   </li>
  )
}
