import React from "react";
import ReactDOM from "react-dom";
import Routes from './routes'

const App = () => {
    return (
        <Routes></Routes>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));