import React from 'react'
import { Link } from 'react-router-dom'
import './list.css'
const ProductCard = ({product}) => {
  return (
    <div className='card'>
    <Link to={`product/${product._id}`} >
    <div >
        <img className='image' src={product.imageUrl} alt="" width={300} height={300} />
        <h3>{product.title}</h3>
        {/* <h6>Description:{product.description} </h6>
        <h6>Price : {product.price}$</h6>
        <h6>Quantity: {product.quantity}</h6> */}
        
    </div>
     </Link>
</div>
  )
}

export default ProductCard