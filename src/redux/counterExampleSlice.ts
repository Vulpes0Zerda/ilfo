import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = number

const initialState: initialStateType = 0


export const counterExampleSlice = createSlice({
    name: 'currentPoints',
    initialState,
    reducers:{
        add(state){
            state++
        },
        sub(state){
            state--
        },
        addAmount(state, action: PayloadAction<initialStateType>){
            state += action.payload
        },
        reset(state){
            state = initialState
        },
    }
})

export const {add, sub, addAmount, reset} = counterExampleSlice.actions

export default counterExampleSlice.reducer