import { observable, action } from "mobx";
import axios from "axios";

const FETCH_URL =
  "httpS://59257e8a21cf650011fddc9b.mockapi.io/counter/count/count";
const PUT_URL =
  "httpS://59257e8a21cf650011fddc9b.mockapi.io/counter/count/count/1";

class CounterStore {
  @observable count = 0;
  constructor() {
    this.setCount(0);
  }
  @action
  getInitialCount() {
    console.log("fetching initial count!");
    axios({
      method: "GET",
      url: FETCH_URL
    })
      .then(res => console.log("res from getInitialCount: ", res))
      .catch(err => console.log("error: ", err));
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
