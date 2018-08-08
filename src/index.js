import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const Test = () => <h1>Webpack4 React with Hot-Reload 👍</h1>;

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();
