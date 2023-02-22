import React from 'react'
import Footer from '../footer/Footer'
import ProductList from '../products/ProductList'
import './home.css'
const HomePage = () => {
  return (
    <div className='body' >
        <img src="https://blog-ecophytohautsdefrance.fr/wp-content/uploads/2017/01/DSC04077.jpg" width="100%" height={600} hello alt="" />
        <ProductList />
        <Footer />
    </div>
  )
}

export default HomePage