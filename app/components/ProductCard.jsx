import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import p1 from '../assets/art-artwork-1822831.jpg'

const ProductCard = () => {
    return (
        <Link href="../Product/1" className='transform overflow-hidden  bg-white duration-200 hover:scale-105 cursor-pointer'>
            <Image
                className='w-full '
                src={p1}
                alt='product1'
                height={500}
                width={500} />
            <div className='text-lg font-medium'>
                <h2 className='text-lg font-medium'> Product Name</h2>
                <div className='flex items-center text-black/[0.5]'>
                    <p className='mr-2 text-lg font-semibold'>$20.00</p>
                    <p className='text-base font-medium line-through'>
                        $25.00
                    </p>
                    <p className='ml-auto text-base font-medium text-green-500'>
                        20% off
                    </p>
                </div>
            </div>
        </Link>



    )
}

export default ProductCard