// store/store.ts
import { configureStore,combineReducers } from "@reduxjs/toolkit";
//import the ConterSlice from Slices folder
import userslice from "./slices/userslice";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key:"root",
  version:1,
  storage
}

//combine all the reducers you have
const reducer = combineReducers({
  userAuthState:userslice

})
//parse in the persistConfig and reducer to persistReducer
const persistedReducer = persistReducer(persistConfig,reducer)
//configure your store
const store = configureStore({
    
    reducer: {
      
      //define your slices here
      //the first is the name of the slice parsing in the counterSlice
      reducer:persistedReducer
     
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;