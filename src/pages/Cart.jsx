import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {cartActions} from '../store/CartSlice';
import {motion} from 'framer-motion';

const Cart = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const product = useSelector(state => state.cart.itemsList);
	const subtotal = useSelector(state => state.cart.subtotalPrice);
	const handleDelete = (id) => {
		dispatch(cartActions.deleteFromCart(id));
	} 
	const handleAddtocart = (id) => {
		dispatch(cartActions.addCart(id));	
	}
	
	const handleReduce = (id) => {
		dispatch(cartActions.removeFromCart(id));	
	}

	const handleCheckout = () => {
		if(subtotal === 0){
			navigate("/");
		}else{
			navigate("/checkout");
		}
	}

	const containerVariants = {
		hidden: {
		    opacity: 0,
		    x: '100vw'
		},
	    visible : {
		    opacity: 1,
		    x: 0,
		    transition: {
		        type: 'spring',
		        delay: 0.5
		    }
	    },
	    exit: {
	        x: '-100vw',
	        transition: {ease: 'easeInOut'}
	    }
	}

	return (
		<motion.div 
		    variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		    className="flex justify-center items-center p-5 md:p-20 lg:p-8 bg-bgash w-screen "
		>
			<div className=" flex flex-col lg:grid lg:grid-cols-[4fr_2fr] lg:items-start justify-start gap-10 lg:gap-12 items-center w-full">
			    <div className="flex flex-col gap-6 w-full">
				    { subtotal === 0 ?
				        (<div className="flex justify-center items-center text-center text-open-sans text-blackk text-lg md:text-2xl pt-28">
						    <p>Idan! your cart is empty, go back and buy something</p>
						</div>) :
						    (
						    	product.map((item,i) => {
						    		return(
							    		<div key={item.id} className="flex flex-col lg:flex-row justify-start items-center border-b-2 rounded-lg bg-white w-full ">
										    <div className="w-full h-fit justify-center lg:justify-start flex items-center">
										        <img src={`${item?.imageUrl}`} alt="cart item"/>
										    </div>
										    <div className="flex flex-col items-center lg:items-left p-4 mt-4 lg:mt-0 lg:p-3 lg:pr-8 gap-8 w-full">
										        <div className="flex flex-col mb-auto text-center lg:text-left w-full">
											    	<h3 className="font-bold text-base lg:text-xl text-hk-grotesk text-blackk w-full">{item?.name}</h3>
											    	<p className="text-open-sans text-greyy text-sm lg:text-base">{item?.description}</p>
										    	</div>
										    	<div className="flex flex-col gap-2 mt-auto p-5 md:p-8 md:pt-4 lg:p-0 w-full md:w-3/4 lg:w-80">
											    	<p className="flex justify-between items-center p-4 pl-8 pr-8 text-blackk"><span>${item?.price}</span> <span className="text-blackk">${item?.totalPrice}</span></p>
											    	<div className="flex justify-between items-center text-white w-full">
											    		<button onClick={() => handleReduce(item.id)} disabled={item.quantity===1} className="w-24 h-10 rounded-md p-1 bg-bground text-center text-xl cursor-pointer disabled:bg-red-200 disabled:cursor-not-allowed">-</button>
											    		<p className="w-12 h-8 p-1  text-center text-base lg:text-xl font-semibold text-blackk">{item?.quantity}</p>
											    		<button onClick={() => handleAddtocart(item.id)} className="w-24 h-10 rounded-md p-1 bg-bground text-center text-xl cursor-pointer">+</button>
											    	</div>
											    	<div onClick={() => handleDelete(item.id)} className="flex justify-center items-center text-bground w-full border-2 rounded-md border-bground hover:bg-bground hover:text-white hover:border-0 h-12 p-2">
											    		<i className="fa-solid fa-trash text-center text-lg"></i><span className="text-xl pl-4">Remove</span>
											    	</div>
										    	</div>
										    </div>
										</div>
									)
						    	})
						    )
					}
			    </div>
				<div className={`flex flex-col justify-between items-center  bg-white rounded-lg shadow border-0 p-2 w-full `}>
					<h2 className="font-bold text-blackk text-hk-grotesk text-lg lg:text-2xl p-6">Cart Summary</h2>
					<div className="font-semibold text-blackk text-open-sans text-base lg:text-xl flex justify-between items-center w-full border-t-2 border-b-2 p-6">
						<p>Subtotal</p>
						<p>${subtotal}</p>
					</div>
					<div className="w-full p-4">
						<button onClick={handleCheckout} className=" w-full h-12 rounded-lg bg-bground text-white text-lg font-bold text-hk-grotesk hover:scale-105">Checkout</button>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Cart;