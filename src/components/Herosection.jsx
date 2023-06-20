import React from 'react';
import HeroImage from '../images/HeroImage.png';
import watch1 from '../images/watch1.svg';
import watch2 from '../images/watch2.svg';
import watch3 from '../images/watch3.svg';

const Herosection = () => {
	return (
		<section className="p-8 pt-16 flex justify-center items-center w-full bg-bgash">
			<div className="p-2 flex flex-col items-center w-full">
				<div className="flex flex-col lg:flex-row lg:justify-between items-center">
				    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:items-start gap-8 lg:gap-16 lg:p-10">
					    <div className="w-32 h-4 bg-bground"></div>
						<h1 className="text-hk-grotesk font-bold text-blackk text-3xl md:text-5xl lg:text-6xl text-center lg:text-left ">Get Special Watch with Special Prices</h1>
						<ul className="grid grid-cols-1 md:grid-cols-2 list-disc marker:text-yelloww gap-6 lg:gap-4 pl-4 text-open-sans text-lg text-hero-text">
							<li className="">Newest OS Support</li>
							<li>Water and Dust Resistant</li>
							<li>Long lasting battery life</li>
							<li>Get a 20% Cashback right now</li>
						</ul>
						<div className="flex flex-col md:flex-row items-center justify-center w-full">
							<input className="text-blackk placeholder:text-center md:placeholder:text-left placeholder-bgash w-full md:w-[26rem] h-32 md:h-12 p-4 md:p-3 rounded-lg" type="text" placeholder="Insert your email"/>
							<button className="text-open-sans bg-green-button text-white w-[calc(100%-1.2rem)] md:w-[8rem] h-10 rounded-lg -translate-y-12 md:-translate-y-0 md:-translate-x-[8.5rem]">Join Pre-Order</button>
						</div>
					</div>
					<div className="flex flex-col md:flex-row md:p-20 lg:p-16 w-full lg:w-1/2">
					    <div className="bg-bluee rounded-full w-8 h-8 -mb-4 -ml-4 md:-mt-4 md:-mr-4"></div>
						<img className="z-999 w-full h-fit"  src={HeroImage} alt="hero image"/>
						<div className="bg-yelloww w-4 h-24 -mt-24 -mr-4 md:-mt-0 md:-mr-0 self-end"></div>
					</div>
				</div>
				<div className="flex justify-center items-center gap-10 p-6">
					<div className="flex justify-center items-center gap-8 p-4 bg-white rounded-md w-fit">
					    <img src={watch1} alt="hero feature image 1"/>
					    <div>
					        <p>Beats by Dre C 3450. Active Noise Cancelling</p>
					        <p>$1,750.00</p>
					    </div>
					</div>
					<div className="flex justify-center items-center gap-8 p-4 bg-white rounded-md w-fit">
					    <img src={watch2} alt="hero feature image 2"/>
					    <div>
					        <p>Samsung Galaxy Watch 3.Black Metalic Newest</p>
					        <p>$1,750.00</p>
					    </div>
					</div>
					<div className="flex justify-center items-center gap-8 p-4 bg-white rounded-md w-fit">
					    <img src={watch3} alt="hero feature image 2"/>
					    <div>
					        <p>Apple Watch 4 2020.Silver - Special Edition</p>
					        <p>$1,750.00</p>
					    </div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Herosection;