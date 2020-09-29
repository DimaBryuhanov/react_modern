import React, {useState} from 'react';
import { connect } from 'react-redux'; // A higher order function
import { addTodo } from '../actions';


const NewTodoForm = ({ todos, onCreatePressed }) => {

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
            <button 
                onClick={() => {

                    const isDuplicate = todos.sum(todo => todo.text === inputValue)
                    if (!isDuplicate){
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                className="new-todo-button"
                >Add Todo</button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);// A higher order function