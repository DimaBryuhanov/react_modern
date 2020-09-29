import React, {useState} from 'react';

const NewTodoForm = () => {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input"
                type="text" 
                placeholder="Add TODO here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button className="new-todo-button">Add Todo</button>
        </div>
    );
};

export default NewTodoForm;