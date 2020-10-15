export const ADD_TO_DO = 'ADD_TO_DO';
export const addTodo = text => ({
    type: ADD_TO_DO,
    payload: { text }
});

export const REMOVE_TO_DO = 'REMOVE_TO_DO';
export const removeTodo = text => ({
    type: REMOVE_TO_DO,
    payload: { text }
});

export const COMPLETE_TODO = 'COMPLETE_TODO';
export const completeTodo = text => ({
    type: COMPLETE_TODO,
    payload: { text }
});