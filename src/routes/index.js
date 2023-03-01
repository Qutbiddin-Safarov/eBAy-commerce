import Home from './home/Home';
import { Routes, Route } from "react-router-dom"
import Header from '../components/header/Header';
import Messages from './messages/Messages';
import SingleProduct from './product/SingleProduct';
import SearchProd from './search/Search';
import Login from './auth/login/Login'
import Registrate from './auth/registrate/Registrate';
import Wishlist from './wishlist/Wishlist';
import Cart from './cart/Cart';
import Search from '../components/search/Search';
import Plp from './plp/Plp';
import Footer from '../components/footer/Footer';

const AllRoutes = () => {
  return (
    <>
      <Header/>
      <Search/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Registrate/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/search/:productTitle" element={<SearchProd/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/plp' element={<Plp/>}/>
      </Routes>
      <Footer/>
    </>
   
  )
}

export default AllRoutes