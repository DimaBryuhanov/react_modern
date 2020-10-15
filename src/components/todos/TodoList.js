import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoItem from './TodoItem';
import { removeTodo } from '../actions';

const TodoList = ({ todos = [], onRemovePressed }) => {
    return (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo =>
                <TodoItem
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                />)}
        </div>
    );
};

/**
 * Maps the required fields from the global State to the props the current component requires
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
    onRemovePressed: text => dispatch(removeTodo(text)),
})

//connect connects the Component to the Store
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);