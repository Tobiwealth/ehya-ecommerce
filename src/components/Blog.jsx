import React from 'react';
import image111 from '../images/Image111.svg';
import image11 from '../images/Image11.svg';
import image12 from '../images/Image12.svg';
import icon11 from '../images/Icon11.svg';

const Blog = () => {
	return (
		<div className="flex flex-col justify-center items-center p-8 pb-16 mt-10">
		    <div className="text-center">
		    	<h1 className="text-hk-grotesk font-bold text-blackk text-3xl md:text-4xl p-6 pb-4"><span className="text-2xl mr-2 -translate-y-6">📝</span>Read our Blog</h1>
		    	<p className="text-open-sans font-normal text-hero-text text-base mb-12">Check our latest article to get inspiring content for shopping</p>
		    </div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16">
				<div className="bg-bgash w-[17.5rem] h-[19rem] md:w-[21.25rem] md:h-[21.38rem] lg:w-[22.5rem] flex flex-col justify-center items-center p-4 rounded-lg">
					<div className="w-fit">
					    <img className="w-[15.6rem] h-[7.88rem] md:w-[19rem] md:h-[9.75rem] lg:w-[20.25rem] rounded-lg" src={image111} alt="blog"/>
					    <img className="-translate-y-[7rem] translate-x-[13rem] md:-translate-y-[9rem] md:translate-x-[16.3rem] lg:translate-x-[17.5rem]" src={icon11} alt="blog icon"/>
					</div>
					<div className="">
					    <h3 className="text-hk-grotesk font-bold text-blackk text-lg mb-2">Brighten Up Dull Tired Skin</h3>
					    <p className="text-open-sans font-normal text-hero-text text-sm">Gravity is an irresistible force. While it is certainly nice that it keeps us rooted to the…</p>
					    <p className="text-open-sans font-bold text-green-button text-base mt-3 cursor-pointer">Read More <i className="fa-solid fa-arrow-right ml-2"></i></p>
					</div>
				</div>
				<div className="bg-bgash w-[17.5rem] h-[19rem] md:w-[21.25rem] md:h-[21.38rem] lg:w-[22.5rem] flex flex-col justify-center items-center p-4 rounded-lg">
					<div className="w-fit">
					    <img className="w-[15.6rem] h-[7.88rem] md:w-[19rem] md:h-[9.75rem] lg:w-[20.25rem] rounded-lg" src={image11} alt="blog"/>
					    <img className="-translate-y-[7rem] translate-x-[13rem] w-[2.25rem] h-[2.25rem] md:-translate-y-[9rem] md:translate-x-[16.3rem] lg:translate-x-[17.5rem]" src={icon11} alt="blog icon"/>
					</div>
					<div className="">
					    <h3 className="text-hk-grotesk font-bold text-blackk text-lg mb-2">Brighten Up Dull Tired Skin</h3>
					    <p className="text-open-sans font-normal text-hero-text text-sm">Gravity is an irresistible force. While it is certainly nice that it keeps us rooted to the…</p>
					    <p className="text-open-sans font-bold text-green-button text-base mt-3 cursor-pointer">Read More <i className="fa-solid fa-arrow-right ml-2"></i></p>
					</div>
				</div>
				<div className="bg-bgash w-[17.5rem] h-[19rem] md:w-[21.25rem] md:h-[21.38rem] lg:w-[22.5rem] flex flex-col justify-center items-center p-4 rounded-lg">
					<div className="w-fit">
					    <img className="w-[15.6rem] h-[7.88rem] md:w-[19rem] md:h-[9.75rem] lg:w-[20.25rem] rounded-lg" src={image12} alt="blog"/>
					    <img className="-translate-y-[7rem] translate-x-[13rem] w-[2.25rem] h-[2.25rem] md:-translate-y-[9rem] md:translate-x-[16.3rem] lg:translate-x-[17.5rem]" src={icon11} alt="blog icon"/>
					</div>
					<div className="">
					    <h3 className="text-hk-grotesk font-bold text-blackk text-lg mb-2">Brighten Up Dull Tired Skin</h3>
					    <p className="text-open-sans font-normal text-hero-text text-sm">Gravity is an irresistible force. While it is certainly nice that it keeps us rooted to the…</p>
					    <p className="text-open-sans font-bold text-green-button text-base mt-3 cursor-pointer">Read More <i className="fa-solid fa-arrow-right ml-2"></i></p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog;