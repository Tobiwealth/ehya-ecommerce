import React from 'react';
import {motion} from 'framer-motion';
import {useSelector} from 'react-redux';

const Blog = () => {
	const product = useSelector(state => state.cart.productList);
	return (
		<div className="flex flex-col justify-center items-center p-8 pb-16 mt-10">
		    <div className="text-center">
		    	<h1 className="text-hk-grotesk font-bold text-blackk text-3xl md:text-4xl p-6 pb-4"><span className="text-2xl mr-2 -translate-y-6">📝</span>Read our Blog</h1>
		    	<p className="text-open-sans font-normal text-hero-text text-base mb-12">Check our latest article to get inspiring content for shopping</p>
		    </div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16">
			    {
			    	product.map((item,i) => {
			    		if(i > 8 && i < 12){
			    			return(
			    				<div key={item.id} className="bg-bgash w-[17.5rem] h-[19rem] md:w-[21.25rem] md:h-[21.38rem] lg:w-[22.5rem] flex flex-col justify-center items-center p-4 rounded-lg">
									<div className="w-fit">
									    <motion.img
									        initial={{ opacity: 0.2 }}
                                            whileInView={{ opacity: 1, transition:{delay:0.5, duration:1.5} }} 
									        className="w-[15.6rem] h-[7.88rem] md:w-[19rem] md:h-[9.75rem] lg:w-[20.25rem] rounded-lg" src={`${item?.imageUrl}`} alt="blog"
									    />
									    <img className="-translate-y-[7rem] translate-x-[13rem] md:-translate-y-[9rem] md:translate-x-[16.3rem] lg:translate-x-[17.5rem]" src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/Icon11.svg" alt="blog icon"/>
									</div>
									<div className="">
									    <h3 className="text-hk-grotesk font-bold text-blackk text-lg mb-2">{item?.name}</h3>
									    <p className="text-open-sans font-normal text-hero-text text-sm">{item?.description}</p>
									    <p className="text-open-sans font-bold text-green-button text-base mt-3 cursor-pointer">Read More <i className="fa-solid fa-arrow-right ml-2"></i></p>
									</div>
								</div>
			    			)
			    		}
			    	})
			    }
			</div>
		</div>
	)
}

export default Blog;