import React from 'react';


const MostSoldCamera = ({product}) => {

	return (
		<div>
			<div className="p-4">
				<h3 className="text-hk-grotesk font-bold text-blackk text-2xl mb-8">Most Sold Camera</h3>
				<div className="flex flex-col gap-6">
				    {
				    	product.map((item,i) => {
				    		if(i > 3 && i < 8){
				    			return(
				    				<div key={item.id} className="flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center p-6 md:p-0 md:pl-4 rounded-lg gap-6 w-[16.25rem] h-[9.6rem] md:w-80 md:h-24 lg:w-[22.4rem] bg-bgash">
										<div><img className="w-[4.15rem] h-[4.15rem] mb:ml-6" src={`${item?.imageUrl}`} alt="sold"/></div>
										<div className="flex flex-col ">
										    <h4 className="text-hk-grotesk font-semibold text-blackk text-base text-left md:mb-2">{item?.name}</h4>
										    <div className="flex justify-center items-center gap-2">
										    	<img className="" src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/star.png" alt="star"/>
										    	<span className="text-blackk text-sm text-open-sans -ml-1">{item?.rating}</span> <span className="w-1 h-1 m-2 rounded-full bg-hero-text"></span>
										    	<p className="text-hero-text text-sm font-semibold text-open-sans"><i className="fa-solid fa-cart-shopping mr-2"></i><span>{item?.unitsold}k</span><span className="ml-1">Units sold</span></p>
										    </div>
										</div>
									</div>
				    			)
				    		}
				    	})
				    }
				</div>
				<div className="p-8 pl-6 text-open-sans font-bold text-green-button flex justify-between items-center w-[16.25rem] h-[9.6rem] md:w-80 md:h-24 lg:w-[22.4rem] text-base ">
					<p className="cursor-pointer">Leaderboard details</p> <i className="fa-solid fa-chevron-right cursor-pointer"></i>
				</div>
			</div>
		</div>
	)
}

export default MostSoldCamera;