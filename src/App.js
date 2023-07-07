import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import {cartActions} from './store/CartSlice';
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch("http://localhost:1337/api/products?populate=*", {
          headers: {
                Authorization : "Bearer e47738a2164727590016aae94cad06acd330c805500c9e321f1ebc01dcd4dd8f5c239c6d4f271c1ffeec146e59a81ed71d27148147a8806c628c088c5ed3e82c8b4ab5a38b04b042ca07f3c750f2ef06b87d918ae1bad2fc58624e8dd5340a41c262cf12230c98bf67e19cdaf591ee0a68779f488e59d108acf86e4eccbe24fe" 
            }
          });
          const res = await response.json();
          console.log(res.data)
          dispatch(cartActions.addProducts(res.data));
          setIsLoading(false);
          //console.log();  
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[])

  return (
    <div className="">
      <Router>
        <Navbar/>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/cart/:id" element={<Product/>}/> 
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
