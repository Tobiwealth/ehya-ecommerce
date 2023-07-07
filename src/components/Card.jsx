import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {cartActions} from '../store/CartSlice';



const Card = ({src,name,price,fmrprice, id,item}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	let url = "http://localhost:1337";
	const handleCard = () => {
		dispatch(cartActions.addToCart(item));
	}
	
	return (
		<div className="">
			<div className="flex flex-col items-center w-[16.5rem] h-[24.5rem] rounded-lg hover:bg-light-green p-4">
				<div className="flex justify-end w-full mb-2"><img className="w-9 h-9 flex" src={`${url}/uploads/Icon_5eb1f05b25.svg`} alt="products"/></div>
				<img className="w-32 h-32 rounded-lg" src={src} alt="products"/>
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