//Libraries' components:
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ReactDOM from 'react-dom';
// Local components:
import App from './components/App';
import { configureStore} from './components/store';

const store = configureStore();
const persistor = persistStore(store); //Saves the store in the local storage

ReactDOM.render(
    <Provider store={store}>
        <PersistGate 
            loading={<div>Loading...</div>} //The view displayed while the App data is being loaded
            persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);