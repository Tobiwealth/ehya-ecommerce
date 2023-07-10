import React from 'react';
import {useDispatch} from 'react-redux';
import {cartActions} from '../store/CartSlice';
import {uiActions} from '../store/UiSlice';
import {motion} from 'framer-motion';



const Card = ({src,name,price,fmrprice, id,item}) => {
	const dispatch = useDispatch()
	const handleCard = () => {
		dispatch(cartActions.addToCart(item));
		dispatch(uiActions.showNotification({
			message:"Your item has been added to the cart",
			type:"success",
			open: true
		}))
	}
	
	return (
		<div className="">
			<div className="flex flex-col items-center w-[16.5rem] h-[24.5rem] rounded-lg hover:bg-light-green p-4">
				<div className="flex justify-end w-full mb-2"><img className="w-9 h-9 flex" src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/Icon.svg" alt="products"/></div>
				<motion.img 
				    initial={{ opacity: 0.2 }}
                    whileInView={{ opacity: 1, transition:{delay:0.5, duration:1.5} }}
				    className="w-32 h-32 rounded-lg" src={src} alt="products"
				/>
				<div className="text-center mt-auto">
					<h3 className="p-3 text-hk-grotesk font-bold text-blackk text-lg lg:xl ">{name}</h3>
					<p className="text-hk-grotesk font-semibold text-blackk text-base flex justify-around p-2"><span>${price}</span><span className="text-greyy line-through">${fmrprice}</span></p>
					<button onClick={() => handleCard()} className="text-open-sans font-normal text-base text-green-button w-52 h-10 hover:bg-green-button hover:text-white rounded-lg">Buy Now</button>
				</div>
			</div>
		</div>
	)
}

export default Card;