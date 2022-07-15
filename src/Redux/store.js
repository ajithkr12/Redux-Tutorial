import {configureStore} from '@reduxjs/toolkit'
import colorReducer from './Slice/colorSlice'
import countSlice from './Slice/countSlice'
export default configureStore({
    reducer:{
        color:colorReducer,
        count:countSlice
    }
})