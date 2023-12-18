import React, { createContext, useState } from 'react'
import all_collections from '../Component/Assets/all_collection';

const getDefault = () => {
  let cart = {};
  for(var index = 0; index <= all_collections.length; index++) {
    cart[index] = 0;
  }
  return cart;
}

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefault())

    const addToCart = (itemID) => {
      setCartItems((prev) => ({...prev, [itemID]:prev[itemID]+1}))
    }

    const removeFromCart = (itemID) => {
      setCartItems((prev) => ({...prev, [itemID]:prev[itemID]-1}))
    }

    const totalCartValue = () => {
      var total = 0;
      for(let i = 0; i < all_collections.length; i++ ){
        total += cartItems[all_collections[i].id] * all_collections[i].new_price;
      }
      return total;
    }

    const totalInCart = () => {
      var total = 0;
      for(let i = 0; i < all_collections.length; i++ ) {
         total += cartItems[all_collections[i].id];
      }
      return total;
    }

    const contextValue = {all_collections, cartItems, addToCart, removeFromCart, totalCartValue, totalInCart}

  return (
    <ShopContext.Provider value={contextValue}> 
        {props.children}
    </ ShopContext.Provider >
  )
}

export default ShopContextProvider