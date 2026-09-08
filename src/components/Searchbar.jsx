import React,{useContext} from 'react'
import {ShopContext} from '../context/ShopContext'
import searchlogo from '../assets/searchlogo.png'
import close from '../assets/crosslogo.png'
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react'
import {useState} from 'react'

const Searchbar = () => {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext);
    const[visible,setvisible]=useState(false)
    const location=useLocation()
    useEffect(()=>{
      if(location.pathname.includes('collection')){
        setvisible(true)
      }
      else{
        setvisible(false)
      }

    },[location])
  return showSearch && visible? (
    <div className="border-t border-b bg-gray-50 text-center">
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className=" flex-1 outline-none bg-inherit text-sm"
        type="text" placeholder='Search'/>
        <img className="w-4" src={searchlogo} alt=""></img>

        </div>
        <img onClick={()=> setShowSearch(false)} className="inline w-3  cursor-pointer" src={close} alt=""></img>

    </div>
  ):null
}

export default Searchbar