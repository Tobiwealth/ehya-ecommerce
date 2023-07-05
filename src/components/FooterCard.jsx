import React from 'react';

const FooterCard = () => {
	let url = "http://localhost:1337";

	return (
		<div className="bg-yelloww flex justify-center items-center pt-8 lg:pl-36 lg:pr-10">
			<div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 md:gap-16">
				<div>
				    <img className="w-[17.5rem] h-[12.1rem] md:w-[25.13rem] md:h-[15.63rem] lg:h-[22.13rem] lg:-mb-4" src={`${url}/uploads/Hero_Image_0eceb74511.png`} alt="footer"/>
				</div>
				<div className="lg:flex lg:flex-col items-start">
					<h1 className="text-hk-grotesk font-bold text-white text-center lg:text-left text-2xl md:text-5xl p-4 md:p-8 lg:p-16 pl-12 pr-12 md:pl-16 md:pr-16 md:pb-4 lg:pb-6 lg:pt-10 md:leading-snug tracking-wide">Download Ehya now and Get Promo Everyday</h1>
					<div className="flex justify-center items-center gap-6 lg:pl-16">
						<img className="w-[7rem] md:w-[10rem] lg:w-[10.8rem]" src={`${url}/uploads/Object_bb3bb143c5.png`} alt="icon"/>
						<img className="w-[7rem] md:w-[10rem] lg:w-[10.8rem]" src={`${url}/uploads/Object1_a6b6284c0c.png`} alt="icon" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterCard;