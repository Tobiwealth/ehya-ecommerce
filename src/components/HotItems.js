import React from 'react';
import Rectangle7 from '../images/Rectangle7.svg';
import Rectangle8 from '../images/Rectangle8.svg';
import Rectangle9 from '../images/Rectangle9.svg';
import Rectangle5 from '../images/Rectangle5.svg';

const HotItems = () => {
	return (
		<>
			<div className="flex justify-center items-center bg-light-green w-full h-[18.75rem] md:h-[22rem] p-4 md:p-12 pt-8 md:pt-4 lg:pt-0 pb-4 h-fit">
				<div className="w-fit h-full lg:p-16 lg:pt-6 text-center">
					<div className="flex justify-center md:justify-between items-center w-full pb-6 mb-6 md:p-8 ">
					    <h1 className="text-hk-grotesk font-bold text-blackk text-3xl md:text-4xl text-center md:text-left">🔥 Hot Item</h1>
					    <button className="hidden md:block md:w-[11.6rem] md:h-14 bg-green-button text-white text-open-sans font-bold md:text-lg rounded-md hover:bg-white hover:text-green-button hover:border-2 hover:border-green-button">See All Products</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 lg:gap-0 place-items-center rounded-lg p-8 md:p-4 md:pl-0 md:pr-0 bg-white">
						<div className="flex flex-col justify-center items-center gap-6 p-8 mt-6 md:mt-0 md:p-4 pt-6 pb-6 border-b-2 md:border-b-0 md:border-r-2 w-[16.4rem] h-[20.6rem]">
							<img className="min-w-[7rem] min-h-[7rem] max-w-[7.5rem] max-h-[7.5rem] mb-auto" src={Rectangle7} alt="card 1"/>
							<div>
								<h2 className="text-hk-grotesk font-bold text-blackk text-lg lg:text-xl">Asus Zenbook Pro 13”</h2>
								<p className="text-open-sans font-normal text-greyy text-sm md:text-base ">The specification here</p>
							</div>
							<p className="text-open-sans font-semibold text-green-button text-xl mt-auto">$1,500.00</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-6 p-8 mt-8 md:mt-0 md:p-4 pt-6 pb-6 border-b-2 md:border-b-0 lg:border-r-2 w-[16.4rem] h-[20.6rem]">
							<img className="min-w-[7rem] min-h-[7rem] max-w-[7.5rem] max-h-[7.5rem] mb-auto" src={Rectangle8} alt="card 1"/>
							<div>
								<h2 className="text-hk-grotesk font-bold text-blackk text-lg lg:text-xl">Asus Zenbook Pro 13”</h2>
								<p className="text-open-sans font-normal text-greyy text-sm md:text-base ">The specification here</p>
							</div>
							<p className="text-open-sans font-semibold text-green-button text-xl mt-auto">$1,500.00</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-6 mt-8 md:mt-0 p-8 md:p-4 pt-6 pb-6 border-b-2 md:border-b-0 md:border-r-2 lg:border-0 xl:border-r-2 w-[16.4rem] h-[20.6rem]">
							<img className="min-w-[7rem] min-h-[7rem] max-w-[7.5rem] max-h-[7.5rem] mb-auto" src={Rectangle9} alt="card 1"/>
							<div>
								<h2 className="text-hk-grotesk font-bold text-blackk text-lg lg:text-xl">Asus Zenbook Pro 13”</h2>
								<p className="text-open-sans font-normal text-greyy text-sm md:text-base ">The specification here</p>
							</div>
							<p className="text-open-sans font-semibold text-green-button text-xl mt-auto">$1,500.00</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-6 mt-8 md:mt-0 p-8 md:p-4 pt-6 pb-6 w-[16.4rem] h-[20.6rem]">
							<img className="min-w-[7rem] min-h-[7rem] max-w-[7.5rem] max-h-[7.5rem] mb-auto" src={Rectangle5} alt="card 1"/>
							<div>
								<h2 className="text-hk-grotesk font-bold text-blackk text-lg lg:text-xl">Asus Zenbook Pro 13”</h2>
								<p className="text-open-sans font-normal text-greyy text-sm md:text-base ">The specification here</p>
							</div>
							<p className="text-open-sans font-semibold text-green-button text-xl mt-auto">$1,500.00</p>
						</div>
					</div>
					<button className="md:hidden w-[16.25rem] h-12 bg-green-button text-white text-open-sans font-bold text-base rounded-md hover:bg-white hover:text-green-button hover:border-2 hover:border-green-button">See All Products</button>
				</div>
			</div>
		</>
	)
}

export default HotItems;