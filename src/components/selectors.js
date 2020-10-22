//1. Help the components to be independent of the exact structure of data in the Redux store
//2. give us a place to put the logic necessary for transforming bare Redux data into more specific data that our components might need

import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;


export const getIncompleteTodos = createSelector(
    getTodos,
    todos => todos.filter(todo => !todo.isCompleted)
);

//Try as a challenge:
export const getCompletedTodos = createSelector(
    getTodos,
    todos => todos.filter(todo => todo.isCompleted)
);