import React, {useState} from 'react';
import { connect } from 'react-redux'; // A higher order function
import { addTodoRequest } from './thunks';


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

                    const isDuplicate = todos.some(todo => todo.text === inputValue)
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

/**
 * Maps the required Fields from the global State to the props, the current component requires
 * @param {*} state - represents the entire redux state
 * @returns pieces of the global state that the component needs access to
 */
const mapStateToProps = state => ({
    todos: state.todos,
});

/**
 * Maps dispatch to the props Functions
 * @param {*} dispatch - a function that allows to trigger actions that the redux store will respond to
 * @returns pieces of the global state that the component needs access to
 */
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
});
//connect connects the Component to the Store
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);// A higher order function