import {createSlice} from "@reduxjs/toolkit";
import { domAction } from "../asyncAction/userPageAction";

    const userPageSlice = createSlice ({
        name: 'mainSlice',
        initialState: {
            main:{}
        },
        reducers: {

        },
        reducer:{
            // for diff ex
            // fullMain:(state,action)=>{
            //     state.main = action.payload
            // }
        },
        extraReducers:builder=>{
            builder.addCase(domAction.fulfilled,(state,action)=>{
                state.main = action.payload
            })
        }
    })
    
    export const {fullMain} = userPageSlice.actions
    export const {Filt} = userPageSlice.actions

    export default userPageSlice.reducer