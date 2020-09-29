import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import { configureStore} from './store';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);