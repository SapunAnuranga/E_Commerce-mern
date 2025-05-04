import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem'; 
import Title from './Title'; 

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      // Filter by category and subCategory
      productsCopy = productsCopy.filter((item) => item.category === category);
      productsCopy = productsCopy.filter((item) => item.subCategory === subCategory);

      // Slice the first 5 related products
      const slicedProducts = productsCopy.slice(0, 5);

      // Update the related state with the sliced products
      setRelated(slicedProducts);
    }
  }, [products, category, subCategory]);

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELETED'} text2={' PRODUCT'} />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
