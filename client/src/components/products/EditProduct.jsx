import React, { useState } from 'react'
import Modal  from 'react-modal';
import { useDispatch } from 'react-redux';
import { editProduct } from '../../redux/actions/productActions';

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


const EditProduct = ({product}) => {

     const dispatch = useDispatch()
     const [modalIsOpen, setIsOpen] = React.useState(false);
     const [title, setTitle] = useState(product.title)
     const [imageUrl, setImageUrl] = useState(product.imageUrl)
     const [description, setDescription] = useState(product.description)
     const [price, setPrice] = useState(product.price)
     const [quantity, setQuantity] = useState(product.quantity)
   function openModal() {
     setIsOpen(true);
   }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   const newProduct ={
    x:product._id,
    title,
    imageUrl,
    description,
    price,
    quantity
   }
    dispatch(editProduct(newProduct))
    setTitle('')
    setImageUrl('')
    setDescription('')
    setPrice('')
    setQuantity('')
    closeModal()
  }

  return (
    <div>
        <button onClick={openModal}>Edit</button>
    <Modal
      isOpen={modalIsOpen}

      onRequestClose={closeModal}
      style={customStyles}
    contentLabel="Example Modal"
    >
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
            <button type='submit' >Confirm</button>
            <button>Cancel</button>
         </div>  
            </form> 
       </Modal>
    </div>
  ) 
}

export default EditProduct