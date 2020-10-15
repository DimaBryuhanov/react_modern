import { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { todos } from './reducers';

//Hooking to redux store:
const reducers = {
    todos,
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2 //Tells reduxPersist how to reconcile initial & stored states of the application
};

const rootReducer = combineReducers(reducers);
//Tells the reducer 1. How to save & 2. where to store the data:
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(persistedReducer);