import {createSlice} from "@reduxjs/toolkit";
import {DEFAULT_ITEMS} from "../components/items"

const itemSlice = createSlice({
  name:"items",
  initialState:DEFAULT_ITEMS,
  reducers:{
addInitialItems:(state,action)=>{
return state;
}
  }
});


export const itemAction = itemSlice.actions;

export default itemSlice;