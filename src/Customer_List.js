import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { deleteCustomer } from './slices/cutomer_slice'
import { useDispatch } from 'react-redux'
import Modal from './Modal';


export default function Customer_List() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const customer = useSelector((item)=>item.customers)
    const dispatch = useDispatch()
    const [open,setOpen] = useState(false)
    function deletecustomer(i){
        dispatch(deleteCustomer(i))
    }

    const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(null);

    const handleDeleteCustomer = (index) => {
      dispatch(deleteCustomer(index));
    };
  
    const handleUpdateCustomer = (index) => {
      setSelectedCustomerIndex(index);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedCustomerIndex(null);
    };


    function updateCustomer(i){
      setOpen(true)  
    }

    return (
    <div>
        <h1>Customer List </h1>
        <ul style={{listStyle:'none'}}>
            {customer.map((custom,i)=>
                <li>{custom}
                <button onClick={()=>deletecustomer(i)}>Delete</button>
                <button onClick={()=>updateCustomer(i)}> Update</button>
                </li>   
        )}        
        </ul>
       
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Update Customer</h2>
        {selectedCustomerIndex !== null && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const updatedCustomer = e.target.elements.customerInput.value;
            //   handleSaveChanges(updatedCustomer);
            }}
          >
            <input
              type="text"
              name="customerInput"
              defaultValue={customer[selectedCustomerIndex]}
              required
            />
            <button type="submit">Save Changes</button>
          </form>
        )}
      </Modal>
    </div>
  )
  
}

// Customer_List