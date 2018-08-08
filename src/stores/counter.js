import { observable, action } from "mobx";

class CounterStore {
  @observable count = 0;
  constructor() {
    this.setCount(0);
  }
  @action
  setCount(count) {
    this.count = count;
  }
  @action
  incrementCount() {
    this.count++;
  }
  @action
  decrementCount() {
    this.count--;
  }
  @action
  resetCount() {
    this.count = 0;
  }
}

export default CounterStore;
