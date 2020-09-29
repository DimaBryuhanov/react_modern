import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoItem from './TodoItem';

const TodoList = ({ todos = [{text:"hello"}] }) => {
    return (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoItem todo={todo} />)}
        </div>
    );
};

export default TodoList;