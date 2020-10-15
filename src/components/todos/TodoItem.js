import React from 'react';

const TodoItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                {todo.isComplete
                    ? null
                    : <button
                        className="completed-button"
                        onClick={() => onCompletedPressed(todo.text)}
                    >Completed</button>}
                <button
                    className="remove-button"
                    onClick={() => onRemovePressed(todo.text)}
                >Remove</button>
            </div>
        </div>
    );
};

export default TodoItem;