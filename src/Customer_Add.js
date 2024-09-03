import React , {useState} from 'react';
import Customer_List from './Customer_List';
import { addCustomer as addCustomerAction } from './slices/cutomer_slice';
import { useDispatch } from 'react-redux';

export default function Customer_Add() {

    const [input,setInput] = useState("");
//    const [customerDetails,setCustomerDetails]=useState([]);
const dispatch = useDispatch()
    function CustomerData(){
        if(input)
        {
//            console.log("Data",customerDetails);
            // setCustomerDetails((previous)=>[...previous,input]);
            dispatch(addCustomerAction(input))
            setInput("");
        }
        else{
            console.log('No Existence');
        }
    }

    return (
    <>    
    <div>
        <h1>ADD NEW CUSTOMER</h1>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button  onClick={CustomerData}>ADD ME</button>
    </div>
    <div>
       {/* <Customer_List customer={customerDetails} />         */}
    </div>
    </>
  )
}
