import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import currentPointsReducer from './currentPointsSlice'


export const store = configureStore({
  reducer: {
     currentPoints: currentPointsReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>() 

export type RootState = ReturnType<typeof store.getState>