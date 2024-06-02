import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import Wrapper from '@/app/components/Wrapper'
import ProductCardDetails from '@/app/components/ProductCardDetails'
import RelatedProduct from '@/app/components/RelatedProduct'

const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                       <ProductCardDetails/></div>
                    <div className='flex-[1] py-3'>
                        <div className='text-[34px] font-semibold mb-2'>
                            Acrylic Painting
                        </div>
                        <div className='text-lg font-semibold mb-5'>
                        "Exploring the Vibrancy and Versatility of Acrylic Painting"
                        </div>
                        <div className='text-lg font-semibold'>
                          MRP : $19 687.00
                        </div>
                        <div className='text-md font-medium text-black/[0.5]'>
                            incl.of taxes
                        </div>
                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            {`Also include all applicable duties`}
                        </div>
                        <div className='mb-10'>
                        <div className='flex justify-between mb-2'>
                            <div className='tesxt-md font-semibold'>
                                Select Size
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-2'>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                (30 * 30)cm 
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                A1
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                A2
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                A3
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                A4
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                A5 
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium bg-black/[0.1] opacity-40 hover:border-black  cursor-not-allowed'>
                                10'' * 10''
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium bg-black/[0.1] opacity-40 hover:border-black  cursor-not-allowed'>
                                20'' * 20''
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium bg-black/[0.1] opacity-40 hover:border-black  cursor-not-allowed'>
                                30'' * 30''
                            </div>

                        </div>
                        <div className='text-red-600 mt-1'> Size selection is required</div>

                    </div>
                    <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                        Add to cart
                    </button>
                    <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        <div className='text-lg font-bold mb-5'>
                            Product Details
                        </div>
                        <div>
                        Acrylic art, celebrated for its versatility and vibrancy, has revolutionized the artistic landscape since its introduction in the mid-20th century. Acrylic paints are known for their fast drying time and remarkable ability to adhere to various surfaces, including canvas, wood, and paper. This medium allows artists to experiment with techniques that range from watercolor-like washes to thick, textured impasto, creating a diverse array of visual effects. Acrylics also offer the advantage of easy clean-up with water, making them an ideal choice for both novice and experienced artists.
                        </div>
                        <div>Acrylic art, celebrated for its versatility and vibrancy, has revolutionized the artistic landscape since its introduction in the mid-20th century. Acrylic paints are known for their fast drying time and remarkable ability to adhere to various surfaces, including canvas, wood, and paper. This medium allows artists to experiment with techniques that range from watercolor-like washes to thick, textured impasto, creating a diverse array of visual effects. Acrylics also offer the advantage of easy clean-up with water, making them an ideal choice for both novice and experienced artists. </div>
                    </div>
                  

                </div>
                <div>
                    <RelatedProduct/>
                </div>

            </Wrapper>

        </div>
    )
}

export default ProductDetails
