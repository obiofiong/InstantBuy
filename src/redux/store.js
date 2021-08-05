// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";
import counterReducer from './counterSlice'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
     counter: counterReducer,
  },

})
// const store = createStore(rootReducer, composeWithDevTools());


export default store;

