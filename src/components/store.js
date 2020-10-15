import { createStore, combineReducers } from 'redux';
import { todos } from './reducers';

//Hooking to redux store:
const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);