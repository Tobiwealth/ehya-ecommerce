import React from 'react';


const CardItem = ({src, name}) => {
	return (
		<div className="flex flex-col items-center  p-4 border-2 w-32 h-40 md:w-36 md:h-[10.2rem] lg:w-[10.3rem] lg:h-[10.74rem] lg:p-6 hover:bg-white hover:shadow-2xl hover:border-none">
			<div className="border-dashed border-2 border-light-grey mb-auto w-16 h-16">
				<img src={src} alt="Hot Card item"/>
			</div>
			<h3 className="text-hk-grotesk font-semibold text-blackk text-center mt-auto text-base">{name}</h3>
		</div>
	)
}

export default CardItem;