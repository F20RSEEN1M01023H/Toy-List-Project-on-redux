import { createStore } from "redux";
import toyReducer from "./reducer/toyReducer.js";

const store = createStore(toyReducer);
export default store;
