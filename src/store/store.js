import { configureStore } from '@reduxjs/toolkit'
import capsulesSlice from './capsulesSlice'

export const store = configureStore({
  reducer: {
    capsulesData: capsulesSlice,
  },
})
