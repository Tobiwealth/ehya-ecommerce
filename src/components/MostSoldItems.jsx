import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import MostSoldCamera from './mostSoldComponents/MostSoldCamera';
import MostSoldHeadphones from './mostSoldComponents/MostSoldHeadphones';
import MostSoldLaptop from './mostSoldComponents/MostSoldLaptop';

const MostSoldItems = () => {
	const soldProduct = useSelector(state => state.cart.productList);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-10 lg:p-16 w-full border-b-2">
	        <MostSoldLaptop product={soldProduct}/>
	        <MostSoldCamera product={soldProduct}/>
	        <MostSoldHeadphones product={soldProduct}/>
		</div>
	)
}

export default MostSoldItems;