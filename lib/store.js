import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './redux/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  })
}