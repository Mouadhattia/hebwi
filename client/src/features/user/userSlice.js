import { createSlice } from '@reduxjs/toolkit'
import {userActions} from './actions'



const initialState = {
users:[]
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: { },
  extraReducers: {
    [userActions.pending]: (state) => {
      state.status = "loading";
    },
    [userActions.fulfilled]: (state, action) => {
      state.contacts = action.payload.data.result;
      state.status = "success";
      console.log(action);
    },
    [userActions.rejected]: (state) => {
      state.status = "failed";
    },
  } 
});

export const {

} = userSlice.actions
export default userSlice.reducer