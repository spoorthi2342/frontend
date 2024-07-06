// app/page.js
'use client'

import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import Wrapper from "./components/Wrapper";
import ProductCard from "./components/ProductCard";
import { fetchdataFromAPi } from "@/utils/api";
import React,{useState,useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Home() {
 
  return (
    <div>
      <Header/>
      <HeroBanner/>

      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="font-bold text-lg">Adding Colours to Your Life!!</div>
          <div>Art is a multifaceted expression of human creativity and emotion that transcends boundaries, 
            inspires connection, and enriches lives.</div>
        </div>
        <div className="">
        <ProductCard />
        
        </div>
      </Wrapper>
      <Footer/>
    </div>
  );
}
