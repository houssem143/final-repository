import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../redux/actions/productActions'
import './details.css'

const ProductDetails = () => {
    const {details,loading} = useSelector((state)=>state.productReducer)
    console.log(details)
    const params = useParams()
   const dispatch = useDispatch()
   useEffect(() => {
    dispatch(getProduct(params.id)) 
   
  }, [dispatch])
 
  return (
    <div>
        {
            loading ? <h3>Loading...</h3> :
            <div  className='detail'>
         <img src={details.imageUrl} alt="" />
                <h2>  {details.title} </h2>
                <h4> description:{details.description} </h4>
                <h4> Price: {details.price}$  </h4>
            </div>
        }    
    </div>
  )
}

export default ProductDetails