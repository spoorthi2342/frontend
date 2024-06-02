'use client'
import { useState } from 'react'
import { createContext } from 'react'
import React from 'react'

 export const ProductCtx = createContext(null)

const Provider = ({children}) => {
    const [cartItems, setCartItems]=useState([])
  return (
   <ProductCtx.Provider value={{cartItems,setCartItems}}>
{children}
   </ProductCtx.Provider>
  )
}

export default Provider