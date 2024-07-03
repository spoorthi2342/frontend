"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = () => {
            fetch('http://localhost:5000/api/admin/products')
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error('Error fetching products:', error));
        };

        fetchProducts();
        const interval = setInterval(fetchProducts, 5000); // Fetch products every 5 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    const getImagePath = (imagePath) => {
        const imageName = imagePath.split('\\').pop();
        try {
            return require(`../../../Backend/src/uploads/${imageName}`);
        } catch (error) {
            console.error(`Error loading image ${imageName}:`, error);
            // return '/fallback.jpg'; // Provide a fallback image path if needed
        }
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 justify-between'>
            {products.map(product => (
                <Link key={product._id} href="../Product">
                    <div className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'>
                        <Image
                            className='w-full h-full'
                            src={getImagePath(product.image)}
                            alt={product.name || 'Product Image'}
                            height={500}
                            width={500}
                            priority={true}
                        />
                        <div className='text-lg font-medium p-4'>
                            <h2 className='text-lg font-medium'>{product.name}</h2>
                            <div className='flex items-center text-black/[0.5]'>
                                <p className='mr-2 text-lg font-semibold'>${product.price}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductCard;
