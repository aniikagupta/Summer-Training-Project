
// import menu from '../assets/menulogo.png'
// import arrow from '../assets/backlogo.png'
// import Title from '../components/Title'
// import React,{useState} from 'react'
// const Collection = () => {
//   const [filter, setFilter] = useState(false)
//   return (
//     <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
//         <div className="min-w-60">
//           <p onClick={() => setFilter(!filter)} className ="my-2 text-xl flex items-center cursor-pointer gap-2">Filter
//             <img className={`h-3 sm:hidden ${filter?'rotate-270':'rotate-180'}`}src={arrow} />
//           </p>
//           <div className={`border border-gray-300 pl-5 py-3 mt-6 ${filter ? '' : 'hidden'} sm:block`}>
//           <p className="mb-3 text-sm font-medium">Categories</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input className="w-3" type="checkbox" value="Men" /> Men
//             </p>
//              <p className="flex gap-2">
//               <input className="w-3" type="checkbox" value="Women" /> Women
//             </p>
//              <p className="flex gap-2">
//               <input className="w-3" type="checkbox" value="Children" /> Children
//             </p>
//           </div>
//         </div>
        
//          <div className={`border border-gray-300 pl-5 py-3 mt-6${filter ? '' : 'hidden'}sm:block`}>
//           <p className="mb-3 text-sm font-medium">Type</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input className="w-3" type="checkbox" value="Upperwear" /> Upperwear
//             </p>
//              <p className="flex gap-2">
//               <input className="w-3" type="checkbox" value="Bottomwear" /> Bottomwear
//             </p>
//              <p className="flex gap-2">
//               <input className="w-3" type="checkbox" value="Accessories" /> Accessories
//             </p>
//           </div>
//         </div>
//     </div>
//     {/* Products */}
//     <div className='flex-1'>
//       <div className="flex justify-between text-base sm:text-2xl mb-4">
//         <Title text1={"ALL"} text2={"COLLECTIONS"} />
//       </div>

//     </div>
//   </div>
//   )
// }

// export default Collection
// REAL CODE----------------------------------------------------------------------------
// import React, { useState } from 'react'
// import menu from '../assets/menulogo.png'
// import arrow from '../assets/backlogo.png'
// import Title from '../components/Title'
// import { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Productitem from '../components/Productitem'
// import { useEffect } from 'react'


// const Collection = () => {

//   const { products,search,showSearch } = useContext(ShopContext)
//   const [filter, setFilter] = useState(false)
//   const[filterProducts,setFilterProducts]=useState([]);
//   const [categories, setCategories] = useState([]);
//   const[subCategories,setSubCategories]=useState([]);
//   const [sortType, setSortType] = useState('relevant');

//   const toggleFilter = (e) => {
//     if(categories.includes(e.target.value)){
//       setCategories(prev => prev.filter( item=> item !== e.target.value));
//     }
//     else{
//       setCategories(prev => [...prev, e.target.value]);
//     }
//   }
 
//   const toggleSubCategory = (e) => {
//     if(subCategories.includes(e.target.value)){
//       setSubCategories(prev => prev.filter( item=> item !== e.target.value)); 
//     }
//     else{
//       setSubCategories(prev => [...prev, e.target.value]);
//     }
//   }
//   const applyFilters = () => {
//     let productscopy=products.slice();
//     if(showSearch && search){
//       productscopy=productscopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
//     }
//     if(categories.length>0){
//       productscopy=productscopy.filter(item => categories.includes(item.category));
//     }
//     if(subCategories.length>0){
//       productscopy=productscopy.filter(item => subCategories.includes(item.subCategory));
//     }
//     setFilterProducts(productscopy);
//   }
//   const sortProducts = (sortType) => {
//     let fpcopy=filterProducts.slice();
//     switch(sortType){
//       case 'low-high':
//         setFilterProducts(fpcopy.sort((a,b) => a.price - b.price));
//         break;
//       case 'high-low':
//         setFilterProducts(fpcopy.sort((a,b) => b.price - a.price));
//         break;
//       default:
//         applyFilters();
//         break;
//     }
//   }

//   useEffect(()=>{
//     applyFilters();
//   }, [categories, subCategories,search,showSearch])
 
//   useEffect(()=>{
//     sortProducts(sortType);
//   }, [sortType])


//   return (
//     <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
//       {/* Sidebar Filters */}
//       <div className="min-w-60">
//         <p 
//           onClick={() => setFilter(!filter)} 
//           className="my-2 text-xl flex items-center cursor-pointer gap-2"
//         >
//           Filter
//           <img 
//             className={`h-3 sm:hidden transform transition-transform ${filter ? 'rotate-90' : ''}`} 
//             src={arrow} 
//             alt="toggle arrow"
//           />
//         </p>

//         {/* Categories Box */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${filter ? '' : 'hidden'} sm:block`}>
//           <p className="mb-3 text-sm font-medium">Categories</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <label className="flex gap-2 cursor-pointer">
//               <input className="w-3" type="checkbox" value="Men" onChange={toggleFilter} /> Men
//             </label>
//             <label className="flex gap-2 cursor-pointer">
//               <input className="w-3" type="checkbox" value="Women" onChange={toggleFilter} /> Women
//             </label>
//             <label className="flex gap-2 cursor-pointer">
//               <input className="w-3" type="checkbox" value="Children" onChange={toggleFilter} /> Children
//             </label>
//           </div>
//         </div>
        
//         {/* Type Box - Fixed spacing in template literal */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${filter ? '' : 'hidden'} sm:block`}>
//           <p className="mb-3 text-sm font-medium">Type</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <label className="flex gap-2 cursor-pointer">
//               <input className="w-3" type="checkbox" value="Upperwear" onChange={toggleSubCategory} /> Upperwear
//             </label>
//             <label className="flex gap-2 cursor-pointer">
//               <input className="w-3" type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear
//             </label>
//             <label className="flex gap-2 cursor-pointer">
//               <input className="w-3" type="checkbox" value="Accessories" onChange={toggleSubCategory} /> Accessories
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Products Header */}
//       <div className="flex-1">
//         <div className="flex justify-between text-base sm:text-2xl mb-4">
//           <Title text1={"ALL"} text2={"COLLECTIONS"} />
//           <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
//             <option value="relevant">Sort by: Relevant</option>
//             <option value="low-high">Sort by: Price - Low to High</option>
//             <option value="high-low">Sort by: Price - High to Low</option>
//           </select>
//         </div>
//         {/* Map Products */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
//           {
//             filterProducts.map((item, index) => {
//                   console.log("PRODUCT:", item);
//                   return(
          
//               <Productitem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
//             );
            
//             })
//           }

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Collection

import React, { useState, useContext, useEffect } from 'react'
import arrow from '../assets/backlogo.png'
import Title from '../components/Title'
import Productitem from '../components/Productitem'
import Loading from '../components/Loading'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {

  const { products, search, setSearch, showSearch, loading } = useContext(ShopContext)
  const [filter, setFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setCategories(prev => [...prev, e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategories.includes(e.target.value)) {
      setSubCategories(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setSubCategories(prev => [...prev, e.target.value]);
    }
  }

  const clearFilters = () => {
    setCategories([])
    setSubCategories([])
    setSearch('')
  }

  // Filtering and sorting are done together in one place.
  // Before, changing a filter would reset the sort order.
  const applyFilters = () => {
    let productscopy = products.slice();

    if (showSearch && search) {
      productscopy = productscopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (categories.length > 0) {
      productscopy = productscopy.filter(item => categories.includes(item.category));
    }
    if (subCategories.length > 0) {
      productscopy = productscopy.filter(item => subCategories.includes(item.subCategory));
    }

    if (sortType === 'low-high') {
      productscopy.sort((a, b) => a.price - b.price)
    }
    else if (sortType === 'high-low') {
      productscopy.sort((a, b) => b.price - a.price)
    }

    setFilterProducts(productscopy);
  }

  useEffect(() => {
    applyFilters();
  }, [products, categories, subCategories, search, showSearch, sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Sidebar Filters */}
      <div className="sm:min-w-60">
        <p
          onClick={() => setFilter(!filter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filter
          <img
            className={`h-3 sm:hidden transform transition-transform ${filter ? 'rotate-90' : ''}`}
            src={arrow}
            alt="toggle arrow"
          />
        </p>

        {/* On mobile the filters are hidden until "Filter" is clicked */}
        <div className={`${filter ? '' : 'hidden'} sm:block`}>
          <div className="border border-gray-300 pl-5 py-3 mt-6">
            <p className="mb-3 text-sm font-medium">Categories</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {['Men', 'Women', 'Children'].map((cat) => (
                <label key={cat} className="flex gap-2 cursor-pointer hover:text-black">
                  <input className="w-3" type="checkbox" value={cat} checked={categories.includes(cat)} onChange={toggleCategory} /> {cat}
                </label>
              ))}
            </div>
          </div>

          <div className="border border-gray-300 pl-5 py-3 mt-6">
            <p className="mb-3 text-sm font-medium">Type</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {['Upperwear', 'Bottomwear', 'Accessories'].map((type) => (
                <label key={type} className="flex gap-2 cursor-pointer hover:text-black">
                  <input className="w-3" type="checkbox" value={type} checked={subCategories.includes(type)} onChange={toggleSubCategory} /> {type}
                </label>
              ))}
            </div>
          </div>

          <button onClick={clearFilters} className="mt-4 mb-2 text-sm text-gray-500 underline hover:text-black">
            Clear filters
          </button>
        </div>
      </div>

      {/* Right Side - Products */}
      <div className="flex-1">
        <div className="flex flex-wrap justify-between items-center gap-2 text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2 py-1"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Price - Low to High</option>
            <option value="high-low">Sort by: Price - High to Low</option>
          </select>
        </div>

        {loading ? (
          <Loading />
        ) : filterProducts.length === 0 ? (
          // empty state: nothing matched the filters or search
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg text-gray-700 mb-1">No products found</p>
            <p className="text-sm">Try a different search or clear the filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item) => (
              <Productitem key={item._id} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Collection