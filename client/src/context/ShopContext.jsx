import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { products } from '../assets/assets';
import { toast } from "react-toastify";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 10;
  const blackendUrl = import.meta.env.VITE_BACKEND_URL
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  

  // Add item to cart
  const addToCart = async (itemId, size) => {

    if(!size){
      toast.error('select Product size!');
      return; 
    }

    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData); 
  };

  // Calculate total items in the cart
  const getCartCount = () => {
    let totalCount = 0; 
    for (const itemId in cartItem) {
      for (const size in cartItem[itemId]) {
        try {
          if (cartItem[itemId][size] > 0) {
            totalCount += cartItem[itemId][size]; 
          }
        } catch (error) {
          console.error("Error processing cartItem:", error);
        }
      }
    }
    return totalCount;
  };

  // Update item quantity
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);

    if (quantity <= 0) {
      if (cartData[itemId]) {
        delete cartData[itemId][size];
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    } else {
      if (!cartData[itemId]) cartData[itemId] = {};
      cartData[itemId][size] = quantity;
    }

    setCartItem(cartData);
  };

  // Calculate total amount in the cart
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItem) {
      const item = products.find((p) => p._id === itemId);
      if (!item) continue;

      const sizes = cartItem[itemId];
      for (const size in sizes) {
        const quantity = sizes[size];
        if (quantity > 0) {
          totalAmount += item.price * quantity;
        }
      }
    }

    return totalAmount;
  };

const getProductsData = async () => {
  try {
    const response = await axios.get(blackendUrl + '/api/product/list');
    
    if (response.data.success) {
      setProducts(response.data.product)
      
    }else{
      toast.error(response.data.message)
    }

  } catch (error) {
    console.error(error.message);
  }
}

useEffect(()=>{
  getProductsData();
},[])

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    blackendUrl,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
