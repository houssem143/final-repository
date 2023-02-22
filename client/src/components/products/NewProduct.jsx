import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/actions/productActions';
import './newProd.css'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
 
Modal.setAppElement('#root');

const NewProduct = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false); 

    // const {user,loading,auth}=useSelector(state=>state.userReducer)
    // const {products} =useSelector(state=>state.productReducer)
    // const {loading,products} = useSelector(state=>state.productReducer)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')


  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

 const handleSubmit=(e)=>{
    e.preventDefault()
    let newProduct={
        title,
        imageUrl,
        description,
        price,
        quantity
    }
    dispatch(addProduct(newProduct))
    setTitle('')
    setImageUrl('')
    setDescription('')
    setPrice('')
    setQuantity('')
closeModal()
 }

  return (
    <div>
     {/* { */}
        {/* // loading ? <h3>Loading...</h3> :
        // newProd ? addProduct() : */}
    {/* {   loading ? <h3>Loading...</h3> : 
} */}

     <button className='btn add-product-btn' onClick={openModal}>Add product</button>
      <Modal
      isOpen={modalIsOpen}
      
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal">
        
    {/* {loading? <h3>Loading...</h3>: */}
      {/* // products ? products.save() :  */}
    <form onSubmit={handleSubmit} >
            
            <label >title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />

            <label >description</label>
            <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
           
            <label >image</label>
            <input type="URL" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} />
            
            <label >price</label>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
             
            <label >quantity</label>
            <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
            
            <div>
            <button type='submit' className='btn btn-primary' >Confirm</button>
            <button className='btn btn-primary' >Cancel</button>
            </div>
            </form> 
    {/* } */}
        </Modal>

      
       
      </div>
  )
    }

export default NewProduct