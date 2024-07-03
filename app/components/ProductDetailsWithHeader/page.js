import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ProductDetails from '../../Product/[slug]/page'

const productDetailwithHeader = () => {
  return (
    <div>
      <Header/>
        <ProductDetails/>
     <Footer/>
        </div>
  )
}

export default productDetailwithHeader