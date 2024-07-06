'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { IoMdHeartEmpty } from 'react-icons/io';
import ReactMarkdown from 'react-markdown';
import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '@/store/cartSlice';
import RelatedProducts from '../../components/RelatedProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const ProductDetails = () => {
    const router = useRouter();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    // const dispatch = useDispatch();

    // const notify = () => {
    //     toast.success('Success. Check your cart!', {
    //         position: 'bottom-right',
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: 'dark',
    //     });
    // };

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
        try {
            return require(`../../../../Backend/src/uploads/${imageName}`);
        } catch (error) {
            console.error(`Error loading image ${imageName}:`, error);
            return '/fallback.jpg'; // Provide a fallback image path if needed
        }
    };
     
const handleSubmit=()=>{
    router.push('../../Cart/')
}
    return (
        <div>
            <Header />
            <div className="w-full md:py-20">
                <ToastContainer />
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <Image
                            className="rounded-lg shadow-lg"
                            src={getImagePath(product.image)}
                            alt={product.name || 'Product Image'}
                            height={500}
                            width={500}
                            priority
                        />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {product.name}
                        </div>

                        {/* PRODUCT DESCRIPTION */}
                        <div className="text-gray-700 mb-4">
                            <ReactMarkdown>{product.description}</ReactMarkdown>
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : ₹{product.price}
                            </p>
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            (Also includes all applicable duties)
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Size Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                                
                            </div>
                            {/* SIZE END */}
                            

                            {/* SHOW ERROR START */}
                            {showError && (
                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
                            )}
                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        {/* ADD TO CART BUTTON START */}
                        <button
                           onClick={handleSubmit} className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                           
                        >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Wishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}
                    </div>
                    {/* right column end */}
                </div>

                <div className="flex justify-center mt-10">
                    <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                        Buy Now
                    </button>
                </div>

                <RelatedProducts products={[]} /> {/* Assuming an empty array for now */}
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;
