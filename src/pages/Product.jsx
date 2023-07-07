{/*import React, {useState,useEffect} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {cartActions} from '../store/CartSlice';

const Product = () => {
	const {id} = useParams();
	const navigate = useNavigate()
	const [item, setItem] = useState([]);
	const dispatch = useDispatch();
	let url = "http://localhost:1337";

  
    
	const handleAddtocart = () => {
		dispatch(cartActions.addToCart(id));	
	}
	const handleAddtocartt = () => {
		navigate("/cart")
	}
	
	
	const handleReduce = () => {
		   dispatch(cartActions.removeFromCart(id));	
	}

	useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`http://localhost:1337/api/products/2?populate=*`, {
          headers: {
                Authorization : "Bearer e47738a2164727590016aae94cad06acd330c805500c9e321f1ebc01dcd4dd8f5c239c6d4f271c1ffeec146e59a81ed71d27148147a8806c628c088c5ed3e82c8b4ab5a38b04b042ca07f3c750f2ef06b87d918ae1bad2fc58624e8dd5340a41c262cf12230c98bf67e19cdaf591ee0a68779f488e59d108acf86e4eccbe24fe" 
            }
          });
          const res = await response.json();
          console.log(res.data)
          setItem(res.data);
          //console.log();  
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[])
	
	return (
		<div className="flex justify-center items-center p-16 bg-bgash w-full ">
			<div className="flex flex-col lg:flex-row justify-start items-center rounded-lg w-full md:w-96 lg:w-3/5 ">
			    <div className="w-full h-fit justify-center lg:justify-start flex items-center">
			        <img src={`${url}${item?.attributes?.image?.data?.attributes?.url}`} alt="cart item"/>
			    </div>
			    <div className="flex flex-col items-center p-4 mt-4 lg:mt-0 lg:p-3 lg:pr-8 gap-8 w-full">
			        <div className="flex flex-col mb-auto text-center w-full">
				    	<h3 className="font-bold text-base lg:text-xl text-hk-grotesk text-blackk w-full">{item?.attributes?.name}</h3>
				    	<p className="text-open-sans text-greyy text-sm lg:text-base">{item?.attributes?.description}</p>
			    	</div>
			    	<div className="flex flex-col gap-2 mt-auto w-full">
				    	<p className="flex justify-between items-center p-4 pl-8 pr-8 text-blackk"><span>{item?.attributes?.price}</span> <span className="text-greyy line-through">{item?.attributes?.oldPrice}</span></p>
				    	<div className="flex justify-between items-center text-white w-full">
				    		<p onClick={() => handleReduce()} className="w-24 h-10 rounded-md p-1 bg-bground text-center text-xl cursor-pointer">-</p>
				    		<p className="w-12 h-8 p-1  text-center text-base lg:text-xl font-semibold text-blackk">{item?.quantity}</p>
				    		<p onClick={() => handleAddtocart()} className="w-24 h-10 rounded-md p-1 bg-bground text-center text-xl cursor-pointer">+</p>
				    	</div>
				    	<div>
				    		<button onClick = {handleAddtocartt} className=" w-full h-12 rounded-lg bg-bground text-white text-lg font-bold text-hk-grotesk hover:scale-105">Add to Cart<i className="fa-solid fa-cart-shopping text-lg pl-4"></i></button>
				    	</div>
			    	</div>
			    </div>
			</div>
		</div>
	)
}

export default Product*/}