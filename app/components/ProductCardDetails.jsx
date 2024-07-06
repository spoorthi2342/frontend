// // components/ProductDetailsCarousel.js
// 'use client';
// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import Image from 'next/image';

// const ProductDetailsCarousel = ({ images = [] }) => {
//     const getImagePath = (imagePath) => {
//         const imageName = imagePath.split('\\').pop();
//         return `http://localhost:5000/uploads/${imageName}`; // Adjust this line to return the correct image path
//     };

//     return (
//         <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
//             <Carousel
//                 infiniteLoop={true}
//                 showIndicators={false}
//                 showStatus={false}
//                 thumbWidth={60}
//                 className="productCarousel"
//             >
//                 {images.map((img, index) => (
//                     <div key={index}>
//                         <Image
//                             src={getImagePath(img)}
//                             alt={`Product Image ${index + 1}`}
//                             layout='responsive'
//                             width={500}
//                             height={500}
//                             quality={100}
//                         />
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default ProductDetailsCarousel;
