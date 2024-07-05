'use client'

// import Header from "./components/Navbar"
// import Footer from "./components/Footer"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';

const AdminUpload = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const router = useRouter();

  useEffect(()=>{
    const isAdmin= localStorage.getItem('adminLoggedIn')=== 'true';
    if(! isAdmin){
      window.location.href='/';
      return;
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess(data.message);
        setUploadedImageUrl(data.imageUrl);
        setName('');
        setDescription('');
        setPrice('');
        setImage(null);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to upload product');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <Header/>
       <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md'>
        <h2 className='text-2xl font-bold text-center'>Upload Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Upload Product
          </button>
        </form>
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        {success && <p className="mt-4 text-center text-green-500">{success}</p>}
        {uploadedImageUrl && (
          <div className="mt-4 text-center">
            <img src={uploadedImageUrl} alt="Uploaded product" className="w-full h-auto" />
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </div>
   
  );
};

export default AdminUpload;



