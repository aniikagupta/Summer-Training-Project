import React from 'react'
import{NavLink} from 'react-router-dom'
import search from '../assets/searchlogo.png'
import acc from '../assets/acclogo.png'
import { Link } from 'react-router-dom'
import cart from '../assets/cartlogo.png'
import menu from '../assets/menulogo.png'
import { useState ,useContext} from 'react'
import back from '../assets/backlogo.png'
import {ShopContext} from '../context/ShopContext'


const Navbar = () => {
    const[visible,setVisible]=useState(false);
    const {setShowSearch,getCartCount}=useContext(ShopContext)
  return (
    <div className='flex justify-between items-center py-5 font-medium'>
        <ul className="hidden sm:flex gap-5 text-sm ">
            <NavLink to='/' className="flex flex-col items-center gap-1">
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

            </NavLink>
            <NavLink to='/collection' className="flex flex-col items-center gap-1">
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

            </NavLink>
            <NavLink to='/about' className="flex flex-col items-center gap-1">
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

            </NavLink>
            <NavLink to='/contact' className="flex flex-col items-center gap-1 ">
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

            </NavLink>
            </ul>


        <div className="flex items-center gap-3 text-sm">
            <img onClick={()=>setShowSearch(true)}src={search} className='w-7  cursor-pointer ' alt="search" />
            <div className="group relative">
                <Link to='/login'><img src={acc} className='w-7 cursor-pointer ' alt="account" /></Link>
            
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
                        <p className="cursor-pointer hover:text-black ">My Profile</p>
                        <p className="cursor-pointer hover:text-black ">Orders</p>
                        <p className="cursor-pointer hover:text-black ">Logout</p>
                    </div>
                </div>

            </div>
            <Link to='/cart' className="relative">
              
                <img src={cart} className='w-7  min-w-7cursor-pointer ' alt="cart" />
                <p className="absolute right-[-5px] bottom-[-10px] bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{getCartCount()}</p>
            </Link>
            <img onClick={() => setVisible(true)} src={menu} className='w-7 cursor-pointer sm:hidden ' alt="" />

       </div>
    <div className={`absolute top-0 left-0 overflow-hidden  bg-white transition-all ${visible ? 'w-full' : 'w-0'} `}>
        <div className={`flex flex-col text-gray-500`}>
            <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3">
            <img className="h-4 w-5" src={back} alt="back" />
                <p>Back</p>

            </div>
            <NavLink onClick={() => setVisible(false)} to='/' className="flex flex-col items-center gap-1 p-3 border-b">Home</NavLink>
            <NavLink onClick={() => setVisible(false)} to='/collection' className="flex flex-col items-center gap-1 p-3 border-b">Collection</NavLink>
            <NavLink onClick={() => setVisible(false)} to='/about' className="flex flex-col items-center gap-1 p-3 border-b">About</NavLink>
            <NavLink onClick={() => setVisible(false)} to='/contact' className="flex flex-col items-center gap-1 p-3 border-b">Contact</NavLink>

        </div>

    </div>
    </div>
  )
}

export default Navbar


