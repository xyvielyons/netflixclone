// store/slices/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";
 
//create the type of the initial CounterState Value that is going to be passed in
interface UserState {
  userAuthState: boolean;
}
//our initial counter state is o
const initialState: UserState = {
    userAuthState: false,
};
 
const userSlice = createSlice({
//name of the slice
  name: "userslice",
  //the initial state
  initialState,
  //the reducer functions
  reducers: {
    trueState:(state)=>{
        state.userAuthState = true;

    },
    falseState:(state)=>{
        state.userAuthState = false;

    }
 
  },
});

//export the reducers from counterSlice.actions
export const { trueState, falseState } = userSlice.actions;
//export the counterSlice.reducer
export default userSlice.reducer;