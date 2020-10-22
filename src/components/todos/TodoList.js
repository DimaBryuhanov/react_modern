import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { loadTodos, removeTodoRequest, isCompletedRequest } from './thunks';
import { 
    getTodosLoading,
    getIncompleteTodos,
    getCompletedTodos
} from '../selectors';

const BigRedText = styled.div`
    font-size: 48px;
    color:#F00;
`;

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {

    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <div className="list-wrapper">
            <BigRedText>I'm a styled component</BigRedText>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                />)}
                <h3>Complete:</h3>
            {completedTodos.map((todo) =>
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
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state)
});

/**
 * Maps dispatch to the props Functions
 * @param {*} dispatch - a function that allows to trigger actions that the redux store will respond to
 * @returns pieces of the global state that the component needs access to
 */
const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(isCompletedRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos()),
})

//connect connects the Component to the Store
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);