import React from 'react'
import {useContext,useEffect,useState} from 'react'
import {ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import star from '../assets/starlogo.png'
import dstar from '../assets/dullstar.png'


const Product = () => {
  const {productId}=useParams();
  const {products,currency,addToCart}=useContext(ShopContext);
  const [productdata,setproductdata]=useState(false);
  const [image,setimage]=useState('')
  const [size,setsize]=useState('')

  const fetchproductdata=async()=>{
    products.map((item)=>{
      if(item._id==productId){
        setproductdata(item);
        setimage(item.image[0])
        return null;
      }

    })

  }
  useEffect(()=>{
    fetchproductdata()

  },[productId,products])
  return productdata? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap'>
          <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productdata.image.map((item,index)=>(
                <img onClick={()=>setimage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'></img>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image}></img>

          </div>
        </div>
        <div className='flex-1'>
          <h1 className="font-medium text-2xl mt-2">{productdata.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={star} alt="" className="w-3 5"/>
            <img src={star} alt="" className="w-3 5" />
            <img src={star} alt="" className="w-3 5"/>
            <img src={star} alt="" className="w-3 5"/>
            <img src={dstar} alt="" className="w-3 5"/>
            <p className="pl-2">(144)</p>

          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productdata.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productdata.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
                {productdata.sizes.map((item,index)=>(
                  <button onClick={()=>setsize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size?'border-black':''}`} key={index}>{item}</button>
                ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productdata._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
          <p>100% Original Product</p>
          <p>COD is Available</p>
          <p>Easy Return & Exchange Policy</p>
        </div>

        </div>

      </div>
      {/* PRODUCT DESCRIPTION*/ }
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(144)</p>
        </div>
        <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500'>
          <p></p>
        </div>
         
      </div>

    </div>
  ):<div className="opacity-0"></div>
}

export default Product