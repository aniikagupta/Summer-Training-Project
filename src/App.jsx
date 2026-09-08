
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Placeorder from './pages/Placeorder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import { ToastContainer } from 'react-toastify';
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
   
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] xl:px-[11vw] 2xl:px-[13vw] flex-grow">
        <ToastContainer />
        <Navbar />
        <Searchbar />
       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    
      <Footer />
    </div>
  )
}

export default App