import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { deleteProduct, getProducts } from '../../redux/actions/productActions'
import { getProfile } from '../../redux/actions/userActions'
import EditProduct from '../products/EditProduct'
import NewProduct from '../products/NewProduct'
import './login.css'


const Profile = () => {
    const {user,loading,auth}=useSelector(state=>state.userReducer)
    const {products} =useSelector(state=>state.productReducer)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getProducts())
      dispatch(getProfile())
    }, [dispatch]) 
    
  return (
    <div className='lis'>

    <div className='list'>
    <NewProduct />

        {
          loading? <h3>loading...</h3> :
          !auth ? <Navigate to="/signin" />
          : user.userRole == 'Admin' ?
          products.map(el=>
            <div className='card' >
                       
       <img className='image' src={el.imageUrl} alt="" width={300} height={300} />
        <h3>{el.title}</h3>
        <h6>Description:{el.description} </h6>
        <h6>Price : {el.price}$</h6>
        <h6>Quantity: {el.quantity}</h6>
        <button onClick={()=>dispatch(deleteProduct(el._id))}>delete</button>

        <EditProduct product={el} />
              </div>
             ) : <Navigate to='/' />
             
             
            } 
    </div>
            </div>
  )
}

export default Profile