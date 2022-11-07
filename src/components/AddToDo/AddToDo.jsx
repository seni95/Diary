import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import styles from './AddToDo.module.css';

export default function AddToDo({onAdd}) {
    const [text,setText] =useState('');
    const handleChange = (e)=>setText(e.target.value);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim().length===0){
            return;
        }
        onAdd({id:uuidv4(),
    text:text,status:'active'});
    setText('');
    }
  return (
   <form onSubmit={handleSubmit} action="" className={styles.form}>
    <input type="text" placeholder='Add Todo' className={styles.input}
    value={text} onChange={handleChange} />
    <button className={styles.button}>Add</button>
   </form>
  )
}
