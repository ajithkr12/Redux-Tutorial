import {createSlice} from '@reduxjs/toolkit'

export const countSlice=createSlice({
    name:'count',//identifire of state
    initialState:{
        value:5//initial value of state
    },
    reducers:{
        increse_count:(state,action) =>{
            state.value=action.payload.count//return value
        },

        decrese_count:(state,action) =>{
            state.value=action.payload.count//return value
        }
    }
})

//create actions
export const {increse_count,decrese_count}=countSlice.actions
export default countSlice.reducer