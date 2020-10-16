import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure} from '../actions';

/**
 * A thunk gets two arguments when it is triggered:
 * @param {*} dispatch - a function used for sending other redux actions from inside a thunk
 * @param {*} getState - gets the current state of the store
 */
export const loadTodos = () => async (dispatch, getState) => {
    try{
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos-delay');
        const todos = await response.json();
    
        dispatch(loadTodosSuccess(todos)); //used to put all the todos in the redux store
    }catch(e){
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
    
};

export const addTodoRequest = text => async () => {
    try{
        const body = JSON.stringify({ text });
    const response = await fetch('http://localhost:8080/todos', {
        headers:{
            "Content-Type":'application/json'
        },
        method: 'POST',
        body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
    }catch(e){
        dispatch(displayAlert(e));
    }
};

export const displayAlert = text => () => {
    alert(text);
};