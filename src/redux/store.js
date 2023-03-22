import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";

const composedEnhancers = composeWithDevTools();
const store = legacy_createStore(rootReducer, composedEnhancers);
export default store;
