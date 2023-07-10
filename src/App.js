import React, {useEffect} from 'react';
import { Routes , Route, useLocation} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Popup from './components/Popup';
import Notification from './components/Notification';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import About from './pages/About';
import Faqs from './pages/Faqs';
import {cartActions} from './store/CartSlice';
import {uiActions} from './store/UiSlice';
import {useDispatch} from 'react-redux';
import {AnimatePresence}from 'framer-motion';
import supabase from './config/supabase';


function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch(uiActions.setIsloadingtrue());
      const {data: productData, error:error1} = await supabase
        .from('products')
        .select()

      const {data: soldData, error:error2} = await supabase
        .from('soldProducts')
        .select()

        if(error1 || error2) {
          console.log(error1,error2);
        }
        if(productData){
          dispatch(cartActions.addProducts(productData));
        }
        if(soldData){
          dispatch(cartActions.addsoldProducts(soldData));
        }
        dispatch(uiActions.setIsloadingfalse());
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="">
      <Navbar/>
      <Notification/>
      <AnimatePresence>
        <ScrollToTop> 
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/> 
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/newarrival" element={<Product/>}/> 
            <Route path="/checkout" element={<Checkout/>}/> 
            <Route path="/popup" element={<Popup/>}/> 
            <Route path="/about" element={<About/>}/> 
            <Route path="/faqs" element={<Faqs/>}/> 
          </Routes>
        </ScrollToTop> 
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
