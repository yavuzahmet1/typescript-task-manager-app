import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/Types'

const initialState:TodoInitialState= {
    todos:[]
  }

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        createTodo:(state:TodoInitialState,action:PayloadAction<TodoType>)=>{
    state.todos=[...state.todos,action.payload];
    console.log(state.todos)

},
    },

})
export const {createTodo} = todoSlice.actions
export default todoSlice.reducer