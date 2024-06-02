'use client'
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import CartItem from "../components/CartItem";
import empty from '../assets/empty-cart.jpg'
// import { useSelector } from "react-redux";

// import { makePaymentRequest } from "@/utils/api";
// import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
        <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Shopping Cart
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            <div className="flex-[2]">
                            <div className="text-lg font-bold">
                                Cart item 

                                </div>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                            </div>
                            <div className="flex-[1]">
                                <div className="text-lg font-bold">
                                Cart summary 
                                

                                </div>
                                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                    <div className="flex justify-between">
                                         <div className="uppercase text-md md:text-lg font-medium text-black">subTotal</div>
                                         <div className="text-md md:text-lg font-medium text-black">$ 19 756.00</div>

                                    </div>
                                    <div>
                                    Acrylic art, celebrated for its versatility and vibrancy, has revolutionized the artistic landscape since its introduction in the mid-20th century. Acrylic paints are known for their fast drying time and remarkable ability to adhere to various surfaces, including canvas, wood, and paper.
                                    </div>
                                </div>
                                <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                                    Checkout
                                </button>
                            
                            </div>
                          

                        </div>
                        <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-4">
                            <Image
                            src={empty}
                            alt="empty cart"
                            height={300}
                            width={300}
                            className="w-[300px] md:w-[400px]"/>
                            <span className="text-xl font-bold "> Your Cart is Empty
                            </span>
                            <span className="text-center mt-4 ">
                                Look like you have not added anything to Cart.
                                <br/>
                                Go ahead and explore Top categoreis.

                            </span>
                            <Link href={"/"} className=" py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
                                continue shopping
                            </Link>
                        </div>
            
        </Wrapper>
    </div>
  )
}

export default Cart