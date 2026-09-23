//real--------------------
// import { createContext, useState, useEffect } from "react";
// import { products } from "../assets/assets";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const ShopContext = createContext();

// export const ShopContextProvider = ({ children }) => {
//   const currency = '$'
//   const delivery_fee = 20;

//   // Read the cart from localStorage once, when the app first loads.
//   // The function form of useState only runs this on the first render,
//   // not on every re-render.
//   const [cartItems, setCartItems] = useState(() => {
//     try {
//       const saved = localStorage.getItem('cartItems')
//       return saved ? JSON.parse(saved) : {}
//     } catch (error) {
//       // if the saved data is corrupted or localStorage is blocked, just start empty
//       return {}
//     }
//   });

//   const [search, setSearch] = useState('');
//   const [showSearch, setShowSearch] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // Our products are stored locally, so this just waits a moment
//   // to show the loading spinner. With a real backend, we would
//   // set loading to false after the fetch finishes instead.
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 600)
//     return () => clearTimeout(timer)
//   }, [])

//   // Whenever the cart changes, save it to localStorage so it
//   // survives a page refresh or the tab being closed.
//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems))
//   }, [cartItems])

//   const addToCart = (itemId, size) => {
//     if (!size) {
//       toast.error("Select Product Size")
//       return;
//     }
//     let cartdata = structuredClone(cartItems)

//     if (cartdata[itemId]) {
//       if (cartdata[itemId][size]) {
//         cartdata[itemId][size] += 1;
//       }
//       else {
//         cartdata[itemId][size] = 1;
//       }
//     }
//     else {
//       cartdata[itemId] = {}
//       cartdata[itemId][size] = 1;
//     }

//     setCartItems(cartdata);
//     toast.success("Added to cart")
//   };

//   // total number of items in the cart (shown on the navbar badge)
//   const getCartCount = () => {
//     let total = 0;
//     for (const id in cartItems) {
//       for (const size in cartItems[id]) {
//         total += cartItems[id][size]
//       }
//     }
//     return total;
//   }

//   const updatequantity = (itemId, size, quantity) => {
//     let cartdata = structuredClone(cartItems)
//     cartdata[itemId][size] = quantity
//     setCartItems(cartdata)
//   }

//   const clearCart = () => {
//     setCartItems({})
//   }

//   // total price of everything in the cart (without delivery fee)
//   const getcartamt = () => {
//     let total = 0;
//     for (const id in cartItems) {
//       const product = products.find((p) => p._id === id);
//       if (!product) continue;
//       for (const size in cartItems[id]) {
//         total += product.price * cartItems[id][size]
//       }
//     }
//     return total;
//   };

//   const value = {
//     currency,
//     products,
//     cartItems,
//     addToCart,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     getCartCount,
//     updatequantity,
//     clearCart,
//     getcartamt,
//     loading,
//     navigate
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   );
// };
// import { createContext, useState,useEffect, use } from "react";
// import { products } from "../assets/assets";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const ShopContext = createContext();

// export const ShopContextProvider = ({ children }) => {
//   const currency='$'
//   const delivery_fee=20;
//   const [cartItems, setCartItems] = useState({});
//   const [search,setSearch]=useState('');
//   const [showSearch,setShowSearch]=useState(false);
//   const navigate=useNavigate();

//   const addToCart = async(itemId,size) => {
//         if(!size){
//           toast.error("Select Product Size")
//           return;
//         }
//     let cartdata=structuredClone(cartItems)

//     if(cartdata[itemId]){
//       if(cartdata[itemId][size]){
//         cartdata[itemId][size]+=1;
//       }
//       else{
//         cartdata[itemId][size]=1;
//       }
//     }
//     else{
//       cartdata[itemId]={}
//       cartdata[itemId][size]=1;
//     }

//     setCartItems(cartdata);
//   };
//   const getCartCount=()=>{
//     let tot=0;
//     for(const items in cartItems){
//         for(const item in cartItems[items]){
//           try {
//             if(cartItems[items][item]>0){
//               tot+=cartItems[items][item]
//             }
            
//           } catch (error) {
            
//           }
//         }
//     }
//     return tot;
//   }
//   const updatequantity=async(itemId,size,quantity)=>{
//          let cartdata=structuredClone(cartItems)
//          cartdata[itemId][size]=quantity
//          setCartItems(cartdata)

//   }

//   const getcartamt = () => {
//     let totalamt=0;
//     for(const items in cartItems){
//       let iteminfo=products.find((product)=>product._id===items);
//       for(const item in cartItems[items]){
//         try {
//             if(cartItems[items][item]>0){
//               totalamt+=iteminfo.price *cartItems[items][item]
//             }
            
//           } catch (error) {
            
//           }
//       }
//     }
//     return totalamt;
//   };

//   const value = {
//     currency,
//     products,
//     cartItems,
//     addToCart,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     getCartCount,
//     updatequantity,
//     getcartamt,
//     navigate
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

// the local backend from the /backend folder
const API_URL = 'https://summer-training-project-8hv1.onrender.com'

export const ShopContextProvider = ({ children }) => {
  const currency = '$'
  const delivery_fee = 20;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Read the cart from localStorage once, when the app first loads.
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cartItems')
      return saved ? JSON.parse(saved) : {}
    } catch (error) {
      return {}
    }
  });

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  // Fetch the product catalog from the backend once, when the app starts.
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/products`)
        if (!res.ok) throw new Error('Request failed')
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error("Failed to load products:", error)
        toast.error("Could not load products. Is the backend server running?")
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  // Whenever the cart changes, save it to localStorage so it
  // survives a page refresh or the tab being closed.
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size")
      return;
    }
    let cartdata = structuredClone(cartItems)

    if (cartdata[itemId]) {
      if (cartdata[itemId][size]) {
        cartdata[itemId][size] += 1;
      }
      else {
        cartdata[itemId][size] = 1;
      }
    }
    else {
      cartdata[itemId] = {}
      cartdata[itemId][size] = 1;
    }

    setCartItems(cartdata);
    toast.success("Added to cart")
  };

  const getCartCount = () => {
    let total = 0;
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        total += cartItems[id][size]
      }
    }
    return total;
  }

  const updatequantity = (itemId, size, quantity) => {
    let cartdata = structuredClone(cartItems)
    cartdata[itemId][size] = quantity
    setCartItems(cartdata)
  }

  const clearCart = () => {
    setCartItems({})
  }

  const getcartamt = () => {
    let total = 0;
    for (const id in cartItems) {
      const product = products.find((p) => p._id === id);
      if (!product) continue;
      for (const size in cartItems[id]) {
        total += product.price * cartItems[id][size]
      }
    }
    return total;
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
    clearCart,
    getcartamt,
    loading,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};