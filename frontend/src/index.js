import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage'
import SupportPage from './landing_page/support/SupportPage';
import Footer from './landing_page/Footer'
import NavBar from './landing_page/NavBar'
import NotFound from './landing_page/NotFound';
import SignupPage from './landing_page/signup/SignupPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/products' element={<ProductPage/>}></Route>
      <Route path='/support' element={<SupportPage/>}></Route>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    <Footer/>
  </BrowserRouter>
);

