"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductDetailsCarousel from '../../components/ProductCardDetails';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        console.log('Product ID:', id); // Debug: log the product ID

        if (id) {
            fetch(`http://localhost:5000/api/admin/products/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Fetched Product Data:', data); // Debug: log the fetched data
                    setProduct(data);
                })
                .catch(error => {
                    console.error('Error fetching product:', error);
                });
        }
    }, [id]);

    if (!product) return <div>Loading...</div>;

    const getImagePath = (imagePath) => {
        const imageName = imagePath.split('\\').pop();
        return `http://localhost:5000/uploads/${imageName}`;
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <ProductDetailsCarousel images={[product.image]} getImagePath={getImagePath} />
        </div>
    );
};

export default ProductDetails;
