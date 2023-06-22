import React from 'react';
import Card from './Card';
import Rectangle1 from '../images/Rectangle1.svg';
import Rectangle2 from '../images/Rectangle2.svg';
import Rectangle3 from '../images/Rectangle3.svg';
import Rectangle4 from '../images/Rectangle4.svg';
import Rectangle5 from '../images/Rectangle5.svg';
import Rectangle6 from '../images/Rectangle6.svg';
import Rectangle7 from '../images/Rectangle7.svg';
import Rectangle8 from '../images/Rectangle8.svg';

const Products = () => {
	return (
		<div className="flex justify-center items-center p-2 xl:p-0">
			<div>
				<div className="p-4 mb-12">
					<h1 className="text-hk-grotesk font-bold text-blackk text-2xl md:text-3xl lg:text-[2.5rem] text-center p-6 ">Product Recommendation</h1>
					<p className="text-open-sans font-normal text-hero-text text-base text-center">You can choose what our recommendation product here</p>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
				    <Card src={Rectangle1} name="Modena Juice & Vege Blender Silver" price="1,500" fmrprice="2,000"/>
				    <Card src={Rectangle2} name="Leica M3 with APO-Summicron 50mm 1:2" price="1,500" fmrprice="2,000"/>
				    <Card src={Rectangle7} name='Asus Zenbook Pro 13” UX-430 US 2018' price="1,500" fmrprice="2,000"/>
				    <div className="bg-redd flex flex-col items-center w-[16.5rem] h-[24.5rem] rounded-lg p-4">
						<div className="mb-auto">
						    <h3 className="p-3 text-hk-grotesk font-bold text-white text-lg lg:xl mb-2">Apple Watch 4 2020</h3>
						    <p className="text-open-sans font-semibold text-sm text-white text-center "><span className="rounded p-2 bg-red-400 mr-2">10</span><span>:</span><span className="rounded p-2 bg-red-400 mr-2 ml-2">25</span><span>:</span><span className="rounded p-2 bg-red-400 ml-2">54</span></p>
						</div>
						<img className="w-32 h-32 rounded-lg" src={Rectangle3} alt="products"/>
						<button className="text-open-sans font-bold text-base text-redd w-52 h-10 bg-white rounded-lg mt-auto">Buy Now $1,500</button>
					</div>
				    <Card src={Rectangle6} name="Asus Zenbook Pro 13” UX-430 US 2018" price="1,500" fmrprice="2,000"/>
				    <Card src={Rectangle8} name="Modena Juice & VegeBlender Silver" price="1,500" fmrprice="2,000"/>
				    <Card src={Rectangle4} name="Leica M3 with APO-Summicron 50mm 1:2" price="1,500" fmrprice="2,000"/>
				    <Card src={Rectangle5} name="iPad Pro 2018 with 256GB - Black" price="1,500" fmrprice="2,000"/>
				</div>
			</div>

		</div>
	)
}

export default Products;