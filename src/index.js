//Libraries' components:
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
// Local components:
import App from './components/App';
import { configureStore} from './components/store';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);