import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ReletedProducts from '../components/ReletedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  const fetchProductData = () => {
    const product = products.find(
      (item) => item._id === productId || item.id === parseInt(productId)
    );
    if (product) {
      setProductData(product);
      setImage(product.image?.[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Details */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[21.3%] sm:h-auto'>
            {
              productData.image.map((item, index) => (
                <img onClick={()=> setImage(item)}
                  src={item}
                  key={index}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer object-cover aspect-square rounded'
                  alt=""
                />
              ))
            }
          </div>
          {/* Main Product Image */}
          <div className='w-full sm:w-[80%] '>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1 '>
            <h1 className='font-medium text-2xl mt-0'> {productData.name} </h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_dull_icon} alt="" className='w-3 5'/>
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-4 text-3xl font-medium'> {currency}{productData.price} </p>
            <p className='mt-4 text-gray-500 md:w-4/5'> {productData.description} </p>
            <div className='flex flex-col gap-4 my-4'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                { productData.sizes.map((item, index) => (
                 <button onClick={()=>setSize(item)} 
                 className={`border py-1.5 px-3 bg-gray-100 ${item === size ? 'border-gray-500' : ''}`} key={index}> {item} </button>
                ))}
              </div>
            </div>
            {/* Add to Cart Button */}
            <button className='bg-black mt-2 text-white px-8 py-3 text-sm active:bg-gray-700'> Add to Cart </button>
            <hr className='mt-6 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-4 flex flex-col gap-1'>
              <p>100% Orginal Product.</p>
              <p>Cash On Delivery Avilable on This Product.</p>
              <p>Easy return and exchange policy whithin 7 days.</p>
            </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className='mt-20'>
        {/* Tabs */}
        <div className='flex'>
          <button
            className={`border px-5 py-3 text-sm ${activeTab === 'description' ? 'font-bold' : ''}`}
            onClick={() => setActiveTab('description')}> Description
          </button>
          <button
            className={`border px-5 py-3 text-sm ${activeTab === 'review' ? 'font-bold' : ''}`}
            onClick={() => setActiveTab('review')}>Review (122)
          </button>
        </div>

        {/* Tab Content */}
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          {activeTab === 'description' ? (
            <p> {productData.description} </p>
          ) : (
            <div className='flex flex-col gap-4'>
              <p>Absolutely love this product! From the moment I unboxed it, I was impressed by the packaging and attention to detail. The build quality is
                premium and it functions exactly as described. I’ve used similar products before, but this one stands out because of its user-friendly
                design and durability. Shipping was fast, and the seller was responsive to my queries. Highly recommend this to anyone looking for both
                quality and value.</p>
              <p>The product is okay, but there’s definitely room for improvement. It works fine for basic tasks, but I noticed it tends to lag a bit...</p>
            </div>
          )}
        </div>
      </div>

      {/* Display Related Products Section */}
      <div className=''>
          <ReletedProducts category={productData.category} subCategory={productData.subCategory}/>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;
