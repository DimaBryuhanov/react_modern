import React from 'react';

const TodoItem = ({ todo }) => {
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button className="comleted-button">Completed</button>
            <button className="remove-button">Rmove</button>
        </div>
    </div>
}

export default TodoItem;