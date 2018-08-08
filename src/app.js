import React from "react";
import Counter from "./components/counter";
import CounterStore from "./stores/counter";

const counterStore = new CounterStore();

const App = () => (
  <div>
    <h2>Main App</h2>
    <Counter store={counterStore} />
  </div>
);

export default App;
