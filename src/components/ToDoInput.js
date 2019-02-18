import React, {Component } from 'react';
// import './ToDoInput.css';

const ToDoInput = (props) => {
    let { todo, handleInput, handleKeyPress, createNewToDoItem } = props;

        return (
            <div className="ToDoInput">
                    <input type="text"
                           value={todo}
                           onChange={handleInput}
                           onKeyPress={handleKeyPress}
                    />
                    <button className="ToDo-Add"
                            onClick={createNewToDoItem}>+
                    </button>
            </div>
        );
}

export default ToDoInput;
