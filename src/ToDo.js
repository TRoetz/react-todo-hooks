import React, {Component, useState } from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';
import ToDoInput from "./components/ToDoInput";

let list = [{'todo': 'clean the house'},{'todo': 'buy milk'}];
let todo = 'hey'


export default function ToDo() {
  
  const [LIST, setList] = useState(list);
  const [TODO, setTodo] = useState(todo);

  const createNewToDoItem = () => { 
    setList(list.push({'todo': todo})); 
    todo = ''; 

  };

  const handleKeyPress = e => {
    if (e.target.value !== '' && e.key === 'Enter') { createNewToDoItem(); };
  };

  const handleInput = e => { 
    setTodo(todo = e.target.value); 
  };

  const deleteItem = indexToDelete => { 
    setList(list = list.filter((toDo, index) => index !== indexToDelete)); 
  };

  return (
    <div className="ToDo">
      <img className="Logo" src={Logo} alt="React logo"/>
      <h1 className="ToDo-Header">React To Do</h1>
      <div className="ToDo-Container">

        <div className="ToDo-Content">

            { list.map((item, key) => {
                return <ToDoItem key={key} item={item.todo} deleteItem={deleteItem.bind(this, key)} />
                }
            )}

        </div>

        <ToDoInput
            // the value field doesn't clear when the item gets added to the todo list
            value={todo}
            handleInput={handleInput}
            handleKeyPress={handleKeyPress}
            createNewToDoItem={createNewToDoItem}
            />

      </div>
    </div>
  );
}


  


  

  


 

