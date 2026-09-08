
import { createContext, useState,useEffect, use } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency='$'
  const delivery_fee=20;
  const [cartItems, setCartItems] = useState({});
  const [search,setSearch]=useState('');
  const [showSearch,setShowSearch]=useState(false);
  const navigate=useNavigate();

  const addToCart = async(itemId,size) => {
        if(!size){
          toast.error("Select Product Size")
          return;
        }
    let cartdata=structuredClone(cartItems)

    if(cartdata[itemId]){
      if(cartdata[itemId][size]){
        cartdata[itemId][size]+=1;
      }
      else{
        cartdata[itemId][size]=1;
      }
    }
    else{
      cartdata[itemId]={}
      cartdata[itemId][size]=1;
    }

    setCartItems(cartdata);
  };
  const getCartCount=()=>{
    let tot=0;
    for(const items in cartItems){
        for(const item in cartItems[items]){
          try {
            if(cartItems[items][item]>0){
              tot+=cartItems[items][item]
            }
            
          } catch (error) {
            
          }
        }
    }
    return tot;
  }
  const updatequantity=async(itemId,size,quantity)=>{
         let cartdata=structuredClone(cartItems)
         cartdata[itemId][size]=quantity
         setCartItems(cartdata)

  }

  const getcartamt = () => {
    let totalamt=0;
    for(const items in cartItems){
      let iteminfo=products.find((product)=>product._id===items);
      for(const item in cartItems[items]){
        try {
            if(cartItems[items][item]>0){
              totalamt+=iteminfo.price *cartItems[items][item]
            }
            
          } catch (error) {
            
          }
      }
    }
    return totalamt;
  };

  const value = {
    currency,
    products,
    cartItems,
    addToCart,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    getCartCount,
    updatequantity,
    getcartamt,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};