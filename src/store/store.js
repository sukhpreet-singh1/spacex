import { configureStore } from '@reduxjs/toolkit'
import rocketSlice from './rocketSlice'

export const store = configureStore({
  reducer: {
    rocketData: rocketSlice,
  },
})
