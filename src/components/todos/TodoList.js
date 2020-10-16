import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoItem from './TodoItem';
import { removeTodo, completeTodo } from '../actions';
import { loadTodos } from './thunks';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {

    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                />)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

/**
 * Maps the required fields from the global State to the props the current component requires
 * @param {*} state - represents the entire redux state
 * @returns pieces of the global state that the component needs access to
 */
const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

/**
 * Maps dispatch to the props Functions
 * @param {*} dispatch - a function that allows to trigger actions that the redux store will respond to
 * @returns pieces of the global state that the component needs access to
 */
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(completeTodo(text)),
    startLoadingTodos: () => dispatch(loadTodos()),
})

//connect connects the Component to the Store
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);