import React, { useContext } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import ShopDetail from './pages/ShopDetail'
import AddToCard from './pages/AddToCard'
import { CartProvider } from 'react-use-cart'
import RecentDetail from './pages/RecentDetail'
import ActionDetail from './pages/ActionDetail'
import WishList from './pages/WishList'
import Shop2 from './pages/Shop2'
import Support from './pages/Support'
import Dashboard from './pages/Dashboard'
import Addblog from './pages/Addblog'
import EditBlog from './pages/EditBlog'
import { ThemeContext } from './context/ThemeContext'
const AppRouter = () => {
  const [mode] = useContext(ThemeContext)
  return (
    <BrowserRouter>
    <CartProvider>
      <div className={mode}>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/support' element={<Support photo={''} title={''} />}></Route>
      <Route path='/shop' element={<Shop/>} ></Route>
      <Route path='/card' element={<AddToCard/>} ></Route>
      <Route path='/shop/:url' element={<ShopDetail/>} ></Route>
      <Route path='/:url' element={<RecentDetail/>} ></Route>
      <Route path='/:url' element={<ActionDetail/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/wishlist' element={<WishList/>} ></Route>
      <Route path='/shop2' element={<Shop2/>} ></Route>
      <Route path='/dashboard' element={<Dashboard/>} ></Route>
      <Route path='/add' element={<Addblog/>} ></Route>
      <Route path='/edit/:id' element={<EditBlog/>} ></Route>
      <Route path='/admin' element={<Dashboard/>} ></Route>
      <Route path='*' element={<NotFoundPage/>} ></Route>
    </Routes>
    <Footer/>
      </div>
    
    </CartProvider>
    </BrowserRouter>
  )
}

export default AppRouter