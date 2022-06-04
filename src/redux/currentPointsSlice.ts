import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import currentClass from '../classes/Beorning.json'

type currentPointsColorType = Array<number>

type currentPointsType = {
    b: currentPointsColorType,
    r: currentPointsColorType,
    y: currentPointsColorType,
}

const initialState : currentPointsType = {
    b: [] ,
    r: [] ,
    y: [] 
}

type currentPointsActionType = {
    path: typeof currentClass.tree[keyof typeof currentClass.tree]["traits"][keyof typeof currentClass.tree[keyof typeof currentClass.tree]["traits"]],
    color: keyof currentPointsType,
    idx: number
}

//! CONTINUE HERE: make add work with defined types

export const currentPointsSlice = createSlice({
    name: 'currentPoints',
    initialState,
    reducers:{
        add(state, action: PayloadAction<currentPointsActionType>){
            state[action.payload.color]
            const idx = action.payload.idx
            const path = action.payload.path
            while (state[action.payload.color].length <= idx) {
                state[action.payload.color].push(0)
            }
            return state[action.payload.color][idx]++
        },
        sub(state, action){
            return state
        },
        addAll(state, action){
            return state
        },
        subAll(state, action){
            return state
        },
    }
})

export const {add, sub, addAll,subAll} = currentPointsSlice.actions

export default currentPointsSlice.reducer