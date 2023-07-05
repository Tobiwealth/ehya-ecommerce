import React from 'react';
import Card from './Card';

const Products = ({product}) => {
	let url = "http://localhost:1337";

	return (
		<div className="flex justify-center items-center p-2 xl:p-0 mb-8">
			<div>
				<div className="p-4 mb-12">
					<h1 className="text-hk-grotesk font-bold text-blackk text-2xl md:text-3xl lg:text-[2.5rem] text-center p-6 ">Product Recommendation</h1>
					<p className="text-open-sans font-normal text-hero-text text-base text-center">You can choose what our recommendation product here</p>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
				    {
				    	product.map((item,i) => {
				    		if(i < 3) {
				    		    return (
				    		    	<Card key={item.id} src={`${url}${item?.attributes?.image?.data?.attributes?.url}`} name={item?.attributes?.name} price={item?.attributes?.price} fmrprice={item?.attributes?.oldprice}/>
				    		    )
				    		}
				    	})
				    }
				    <div className="bg-redd flex flex-col items-center w-[16.5rem] h-[24.5rem] rounded-lg p-4">
						<div className="mb-auto">
						    <h3 className="p-3 text-hk-grotesk font-bold text-white text-lg lg:xl mb-2">{product[3]?.attributes?.name}</h3>
						    <p className="text-open-sans font-semibold text-sm text-white text-center "><span className="rounded p-2 bg-red-400 mr-2">10</span><span>:</span><span className="rounded p-2 bg-red-400 mr-2 ml-2">25</span><span>:</span><span className="rounded p-2 bg-red-400 ml-2">54</span></p>
						</div>
						<img className="w-32 h-32 rounded-lg" src={`${url}${product[3]?.attributes?.image?.data?.attributes?.url}`} alt="products"/>
						<button className="text-open-sans font-bold text-base text-redd w-52 h-10 bg-white rounded-lg mt-auto">Buy Now ${product[3]?.attributes?.price}</button>
					</div>
					{
				    	product.map((item,i) => {
				    		if(i > 3 && i < 8 ) {
				    		    return (
				    		    	<Card key={item.id} src={`${url}${item?.attributes?.image?.data?.attributes?.url}`} name={item?.attributes?.name} price={item?.attributes?.price} fmrprice={item?.attributes?.oldprice}/>
				    		    )
				    		}
				    	})
				    }
				</div>
			</div>

		</div>
	)
}

export default Products;