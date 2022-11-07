import React, { useState } from 'react'
import AddToDo from '../AddToDo/AddToDo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({filter}) {
    const [todos,setTodos] = useState([
        {id:'123', text:'장보기',status:'active'},
        {id:'124', text:'공부하기',status:'active'},
]);


    const filtered = getFilteredItems(todos,filter);

    const handleAdd= toDo=>{
        setTodos([...todos,toDo]);
    }

    const handleUpdate=(updated)=>{
        setTodos(todos.map(item=>
           item.id===updated.id ? updated : item
        ))
    }
    const handleDelete=(deleted)=>{
        setTodos(todos.filter(item=>
            (item.id !==deleted.id)))
    }

    function getFilteredItems(todos,filter){
        if(filter=='all'){
            return todos;
        }
        return todos.filter(item=>
            item.status===filter)
    }

  return (
    <section className={styles.container}>
        <ul className={styles.list}>
            {
                filtered.map(item=>
                    <Todo key={item.id} todo={item} onUpdate={handleUpdate}
                    onDelete={handleDelete}></Todo>
                )
            }
        </ul>
        <AddToDo onAdd={handleAdd}></AddToDo>
    </section>
  )
}
