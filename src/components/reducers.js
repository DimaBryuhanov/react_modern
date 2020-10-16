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

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_DO: {
            const { text } = payload;
            const newTodo = {
                text,
                isComplete: false
            }
            return state.concat(newTodo);
        }
        case REMOVE_TO_DO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        case COMPLETE_TODO: {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text){
                    return {...todo, isComplete: true} 
                }
                return todo;
            })
        }
        default:
            return state;
    }
}