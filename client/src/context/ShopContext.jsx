import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets"; 
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});

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
    getCartCount
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
