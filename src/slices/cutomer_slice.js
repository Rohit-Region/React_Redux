import { createSlice } from "@reduxjs/toolkit";

const initialStates = [];

const customerslice = createSlice({
    name:'customer',
    initialState:initialStates,
    reducers:{
            addCustomer(state,action){
                state.push(action.payload)
            },
            deleteCustomer(state,action){
                const deletIndex = action.payload; 
                // state.filter((val,index)=>console.log(val,index))
                return state.filter((val,index)=>index!==deletIndex)
            }
            
    }
})

export const {addCustomer,deleteCustomer} = customerslice.actions
export default customerslice.reducer