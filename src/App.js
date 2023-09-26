import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import React from 'react';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/register' Component={Register} />
        <Route path='/signin' Component={Login} />
        <Route path='/productlist' Component={ProductList} />
        <Route path='/cart' Component={Cart} />
        <Route path='/product' Component={Product} />
        

      </Routes>
    </BrowserRouter>


  )
}

export default App
