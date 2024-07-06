'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchProducts = () => {
            fetch('http://localhost:5000/api/admin/products')
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched data', data);
                    setProducts(data);
                })
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

    const handleProductClick = (id) => {
        router.push(`/Product/${id}`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
            {products.map(product => (
                <div 
                    key={product._id} 
                    onClick={() => handleProductClick(product._id)} 
                    className="transform overflow-hidden bg-white rounded-lg shadow-lg hover:scale-105 cursor-pointer"
                >
                    <Image
                        className="w-full h-64 object-cover"
                        src={getImagePath(product.image)}
                        alt={product.name || 'Product Image'}
                        height={500}
                        width={500}
                        priority={true}
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-medium text-gray-900">{product.name}</h2>
                        <p className="text-lg font-semibold text-green-500">${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
