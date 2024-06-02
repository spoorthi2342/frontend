import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import Image from 'next/image'
import prod1 from '../assets/art22.jpg'

const CartItem = () => {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
       <Image
       src={prod1}
       alt='prod 1' 
       width={100}
       height={100}/>
       <div className='w-full flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>
                Mural Art
                <div className='text-sm md:text-md font-medium text-black/[0.5]  black '>
                        Versatility of Mural Painting
                        </div>
            </div>
            
                        <div className='text-sm   md:text-md font-medium text-black/[0.5]  black'>
                          MRP : $19 687.00
                        </div>
        </div>
        <div className='flex items-center justify-between mt-4'>
            <div className=' flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md '>
             <div className='flex items-center gap-1'>
                <div className='font-semibold '> Size</div>
                  <select className='hover:text-black'>
                    <option value={"1"}> 10''*10''</option>
                    <option value={"2"}> 10''*10''</option>
                    <option value={"3"}> 10''*10''</option>
                  </select>
             </div>
             <div className='flex items-center gap-1'>
                <div className='font-semibold '> Quantity</div>
                  <select className='hover:text-black'>
                    <option value={"1"}> 1</option>
                    <option value={"2"}> 2</option>
                    <option value={"3"}> 3</option>
                  </select>
             </div>

            </div>
            <RiDeleteBin6Line className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]'/>

        </div>
       </div>
        </div>
  )
}

export default CartItem