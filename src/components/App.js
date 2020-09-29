import React from 'react';
import { hot } from 'react-hot-loader';
import '../css/App.css';

const App = () => {
    return (<div className="App">
        <h1>App component check</h1>
    </div>);
};

export default hot(module)(App);