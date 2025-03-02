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
        removeTodoById:(state: TodoInitialState, action: PayloadAction<number>)=>{state.todos = state.todos.filter((todo: TodoType) => todo.id !== action.payload)
},
editTodo:(state:TodoInitialState,action:PayloadAction<TodoType>)=>{
    state.todos=[...state.todos.map((todoEdit:TodoType)=>todoEdit.id!==action.payload.id?todoEdit:action.payload)]
}
    },

})
export const {createTodo,removeTodoById,editTodo} = todoSlice.actions
export default todoSlice.reducer