import React from 'react';


const Footer = () => {


	return (
		<div className="flex justify-center items-center p-8 md:p-10 lg:p-16 w-screen lg:mt-4">
			<div className="flex flex-col justify-center items-center w-full p-6">
			    <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start items-center w-full">
					<div className="text-center flex flex-col items-center md:items-start gap-4 md:w-1/2 lg:w-1/4 md:p-3">
						<img src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/Logo.png" alt="logo"/>
						<p className="text-open-sans font-normal text-hero-text text-sm md:text-base md:break-words md:text-left">Build a modern and creative website with crealand</p>
						<div className="">
							<i className="fa-brands fa-facebook-f w-10 h-10 rounded-full p-3 m-2 bg-bgash text-center"></i>
							<i className="fa-brands fa-instagram w-10 h-10 rounded-full p-3 m-2 bg-bgash text-center"></i>
							<i className="fa-brands fa-twitter w-10 h-10 rounded-full p-3 m-2 bg-bgash text-center"></i>
							<i className="fa-brands fa-linkedin-in w-10 h-10 rounded-full p-2 m-3 bg-bgash text-center"></i>
						</div>
					</div>
					<div className="text-open-sans grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-12 lg:mb-16">
						<div>
							<h2 className="font-bold text-blackk text-base md:text-lg">Product</h2>
							<p className="font-normal text-blackk text-sm md:text-base">Landingpage</p>
							<p className="font-normal text-blackk text-sm md:text-base">Features</p>
							<p className="font-normal text-blackk text-sm md:text-base">Documentation</p>
							<p className="font-normal text-blackk text-sm md:text-base">Referral Program</p>
							<p className="font-normal text-blackk text-sm md:text-base">Pricing</p>
						</div>
						<div>
							<h2 className="font-bold text-blackk text-base md:text-lg">Services</h2>
							<p className="font-normal text-blackk text-sm md:text-base">Documentation</p>
							<p className="font-normal text-blackk text-sm md:text-base">Design</p>
							<p className="font-normal text-blackk text-sm md:text-base">Themes</p>
							<p className="font-normal text-blackk text-sm md:text-base">Illustrations</p>
							<p className="font-normal text-blackk text-sm md:text-base">UI Kit</p>
						</div>
						<div>
							<h2 className="font-bold text-blackk text-base md:text-lg">Company</h2>
							<p className="font-normal text-blackk text-sm md:text-base">About</p>
							<p className="font-normal text-blackk text-sm md:text-base">Terms</p>
							<p className="font-normal text-blackk text-sm md:text-base">Privacy Policy</p>
							<p className="font-normal text-blackk text-sm md:text-base">Careers</p>
						</div>
						<div>
							<h2 className="font-bold text-blackk text-base md:text-lg">More</h2>
							<p className="font-normal text-blackk text-sm md:text-base">Documentation</p>
							<p className="font-normal text-blackk text-sm md:text-base">License</p>
							<p className="font-normal text-blackk text-sm md:text-base">Changelog</p>
						</div>
					</div>
				</div>
				<div className="mt-8 flex flex-col items-center gap-4 w-full text-center">
					<img src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/Heart.png" alt="footer icon"/>
					<p className="text-open-sans font-semibold text-hero-text text-base">Copyright © 2019. Crafted with love.</p>
				</div>
			</div>
		</div>
	)
}

export default Footer;