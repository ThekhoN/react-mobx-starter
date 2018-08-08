import React, { Component } from "react";
import { observer } from "mobx-react";

/*********************************/
// Counter App
/*********************************/
@observer
class Counter extends Component {
  componentDidMount() {
    this.props.store.getInitialCount();
  }
  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <div>
          <button onClick={() => this.props.store.decrementCount()}>
            Decrement -{" "}
          </button>
          <h2>{this.props.store.count}</h2>
          <button onClick={() => this.props.store.incrementCount()}>
            Increment +{" "}
          </button>
        </div>
      </div>
    );
  }
}

//   const counterStore = new CounterStore();
//   const CounterAppScene = () => (
//     <div className="scene">
//       <CounterApp store={counterStore} />
//     </div>
//   );

export default Counter;
