'use client';
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';

// Ensure these paths are correct relative to your project structure
import img1 from '../assets/pexels-leeloothefirst-5026446.jpg';
import img2 from '../assets/pexels-ron-lach-8243023.jpg';
import img3 from '../assets/pexels-skylar-kang-6368952.jpg';
import img4 from '../assets/pexels-tiana-18128-2956376.jpg';
import img5 from '../assets/pexels-valeria-ushakova-603898-3094218.jpg';
import img6 from '../assets/pexels-vlada-karpovich-7031624.jpg';

const ProductDetailsCarousel = () => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <div>
                    <Image
                        src={img1}
                        alt='Image 1'
                        layout='responsive'
                        width={50}
                        height={50}
                        quality={100}
                    />
                </div>
                <div>
                    <Image
                        src={img2}
                        alt='Image 2'
                        layout='responsive'
                        width={50}
                        height={50}
                        quality={100}
                    />
                </div>
                <div>
                    <Image
                        src={img3}
                        alt='Image 3'
                        layout='responsive'
                        width={50}
                        height={50}
                        quality={100}
                    />
                </div>
                <div>
                    <Image
                        src={img4}
                        alt='Image 4'
                        layout='responsive'
                        width={50}
                        height={50}
                        quality={100}
                    />
                </div>
                <div>
                    <Image
                        src={img5}
                        alt='Image 5'
                        layout='responsive'
                        width={50}
                        height={50}
                        quality={100}
                    />
                </div>
                <div>
                    <Image
                        src={img6}
                        alt='Image 6'
                        layout='responsive'
                        width={50}
                        height={50}
                        quality={100}
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;
