import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
    <div className="list-wrapper">
        {todos.map(todo => <TodoItem todo={todo}/>)}
    </div>
}

export default TodoList;