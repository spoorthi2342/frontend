// app/page.js
'use client'

import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import Wrapper from "./components/Wrapper";
import ProductCard from "./components/ProductCard";
import { fetchdataFromAPi } from "@/utils/api";
import React,{useState,useEffect} from "react";

// Fetch data inside the component
// async function getProducts() {
//   const products = await fetchdataFromAPi("/api/products?populate=*");
//   return products;
// }
// <h1></h1>
export default function Home() {
  // const [products, setProducts] = React.useState(null);

  // React.useEffect(() => {
  //   async function fetchData() {
  //     const data = await getProducts();
  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  return (
    <div>
      <HeroBanner/>

      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="font-bold text-lg">Adding Colours to Your Life!!</div>
          <div>Art is a multifaceted expression of human creativity and emotion that transcends boundaries, 
            inspires connection, and enriches lives.</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
      </Wrapper>
    </div>
  );
}
