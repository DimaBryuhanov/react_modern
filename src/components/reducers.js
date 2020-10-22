import { 
    ADD_TO_DO, 
    COMPLETE_TODO, 
    REMOVE_TO_DO,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE
} from './actions'

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type){
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
};

const initialState = {isLoading: false, data: []};

export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_DO: {
            const { todo } = payload;
            return state.concat(todo);
        }
        case REMOVE_TO_DO: {
            const { todo: todoToRemove } = payload;
            return state.filter(todo => todo.id !== todoToRemove.id);
        }
        case COMPLETE_TODO: {
            const { todo: updatedTodo } = payload;
            return state.map(todo => {
                if (todo.id === updatedTodo.id){
                    return updatedTodo; 
                }
                return todo;
            })
        }
        case LOAD_TODOS_SUCCESS:{
            const { todos } = payload;
            return todos;
        }
        //Their bodies are the same as the default case:
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        default:
            return state;
    }
}