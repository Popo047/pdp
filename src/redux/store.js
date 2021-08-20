import { configureStore } from "@reduxjs/toolkit";
import pdpReducer from "./pdp-slice";

const store = configureStore(
  {
    reducer: { pdp: pdpReducer },
  },
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
