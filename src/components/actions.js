export const ADD_TO_DO = 'ADD_TO_DO';
export const addTodo = todo => ({
    type: ADD_TO_DO,
    payload: { todo }
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


export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = todos => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos }
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
});