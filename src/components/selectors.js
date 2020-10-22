//1. Help the components to be independent of the exact structure of data in the Redux store
//2. give us a place to put the logic necessary for transforming bare Redux data into more specific data that our components might need

export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;


//export const getIncompleteTodos

