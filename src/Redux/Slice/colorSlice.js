import {createSlice} from '@reduxjs/toolkit'

export const colorSlice=createSlice({
    name:'color',//identifire of state
    initialState:{
        value:'green'//initial value of state
    },
    reducers:{
        change_color:(state,action) =>{
            state.value=action.payload.color//return value
        }
    }
})

//create actions
export const {change_color}=colorSlice.actions
export default colorSlice.reducer