import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";
var throttle = require("lodash/throttle");

//Load state from local storage
export const loadState = () => {
  try {
    const serializeState = localStorage.getItem("state");
    if (serializeState === null) {
      return undefined;
    }
    return JSON.parse(serializeState);
  } catch (err) {
    return undefined;
  }
};

//Save state to local storage
export const saveState = (state: Store) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    return undefined;
  }
};

const persistedState = loadState();

const store = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
