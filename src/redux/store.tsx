import { configureStore } from '@reduxjs/toolkit'
import todoReduer from "../redux/todoSlice"

export const store = configureStore({
  reducer: {
    todo:todoReduer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch