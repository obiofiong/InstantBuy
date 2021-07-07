// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
  },

})
// const store = createStore(rootReducer, composeWithDevTools());


export default store;

