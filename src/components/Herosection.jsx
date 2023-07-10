import React from 'react';
import Carousel from './Carousel';
import { motion } from "framer-motion";


const Herosection = () => {

	const opacityVariants  = {
		opacityAnimation:{
			opacity: [0.6 , 1],

			transition:{
				repeat: Infinity,
				duration: 3.0,
				delay: 2.0,
				ease: 'easeInOut'
			}
	    } 
	}

	return (
		<section className="p-8 pt-10 flex justify-center items-center w-full bg-bgash">
			<div className="p-2 flex flex-col items-center w-full">
				<div className="flex flex-col xl:flex-row xl:justify-between items-center">
				    <div className="w-full xl:w-1/2 flex flex-col items-center justify-center xl:items-start gap-8 lg:gap-12 xl:gap-16 lg:p-20 xl:p-10">
					    <div className="w-32 h-4 bg-bground"></div>
						<h1 className="text-hk-grotesk font-bold text-blackk text-3xl md:text-5xl lg:text-6xl text-center xl:text-left ">Get Special Watch with Special Prices</h1>
						<ul className="grid grid-cols-1 md:grid-cols-2 list-disc marker:text-yelloww gap-6 lg:gap-8 xl:gap-2 pl-4 text-open-sans text-lg text-hero-text">
							<li className="">Newest OS Support</li>
							<li>Water and Dust Resistant</li>
							<li>Long lasting battery life</li>
							<li>Get a 20% Cashback right now</li>
						</ul>
						<div className="flex flex-col md:flex-row items-center justify-center w-full">
							<input className="text-blackk placeholder:text-center md:placeholder:text-left placeholder-bgash w-full xl:w-[34rem] h-32 md:h-16 p-4 md:p-3 rounded-lg" type="text" placeholder="Insert your email"/>
							<button className="text-open-sans bg-green-button text-white w-[calc(100%-1.2rem)] md:w-[12rem] xl:w-[12rem] h-12 rounded-lg -translate-y-12 md:-translate-y-0 md:-translate-x-[10.0rem] xl:-translate-x-[11.2rem]">Join Pre-Order</button>
						</div>
					</div>
					<div className="flex flex-col md:flex-row md:p-20 xl:p-8 2xl:p-16 w-full lg:w-4/5 xl:w-2/5">
					    <div className="bg-bluee rounded-full w-14 h-14 lg:w-8 lg:h-8 xl:w-14 xl:h-14 -mb-7 -ml-7 md:-mt-7 md:-mr-7 lg:-mt-4 lg:-mr-4 xl:-mt-7 xl:-mr-7"></div>
						<motion.img 
						    variants={opacityVariants}
		                    animate="opacityAnimation"
						    className="z-999 w-full h-fit"  src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/HeroImage.png" alt="hero banner"
						/>
						<div className="bg-yelloww w-6 h-36 md:w-8 md:h-44 -mt-36 -mr-6 md:-mt-0 md:-mr-0 self-end"></div>
					</div>
				</div>
				<Carousel/>
			</div>
		</section>
	)
}

export default Herosection;