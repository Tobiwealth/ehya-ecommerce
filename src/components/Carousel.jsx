import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import watch1 from '../images/watch1.svg';
import watch2 from '../images/watch2.svg';
import watch3 from '../images/watch3.svg';

const Carousel = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
            {
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
                }
            },
            {
                breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0
				}
            }
        ]
    };

    return (
        <div className=" w-full">
	        <Slider className="w-full" {...settings}>
				<div className="p-6 flex justify-center items-center w-full">
				    <div className="flex justify-center items-center gap-4 md:gap-8 p-3 md:p-4 bg-white rounded-md w-[16.9] h-28 md:w-[22.5rem] md:h-[9.1rem] ">
					    <img className="w-14 md:w-24 h-fit rounded-lg" src={watch1} alt="hero feature 1"/>
					    <div>
					        <p className="text-open-sans font-semibold text-sm md:text-base text-blackk">Beats by Dre C 3450. Active Noise Cancelling</p>
					        <p className="pt-4 text-hk-grotesk font-bold text-sm md:text-base text-blackk">$1,750.00</p>
					    </div>
					</div>
				</div>
				<div className="p-6 flex justify-center items-center w-full">
				    <div className="flex justify-center items-center gap-4 md:gap-8 p-3 md:p-4 bg-white rounded-md w-[16.9] h-28 md:w-[22.5rem] md:h-[9.1rem]">
					    <img className="w-14 md:w-24 h-fit rounded-lg" src={watch2} alt="hero feature 2"/>
					    <div>
					        <p className="text-open-sans font-semibold text-sm md:text-base text-blackk">Samsung Galaxy Watch 3.Black Metalic Newest</p>
					        <p className="pt-4 text-hk-grotesk font-bold text-sm md:text-base text-blackk">$1,750.00</p>
					    </div>
					</div>
				</div>
				<div className="p-6 flex justify-center items-center w-full">
				    <div className="flex justify-center items-center gap-4 md:gap-8 p-3 md:p-4 bg-white rounded-md w-[16.9] h-28 md:w-[22.5rem] md:h-[9.1rem]">
					    <img className="w-14 md:w-24 h-fit rounded-lg" src={watch3} alt="hero feature 2"/>
					    <div>
					        <p className="text-open-sans font-semibold text-sm md:text-base text-blackk">Apple Watch 4 2020.Silver - Special Edition</p>
					        <p className="pt-4 text-hk-grotesk font-bold text-sm md:text-base text-blackk">$1,750.00</p>
					    </div>
					</div>
				</div>
	        </Slider>
        </div>
    );
};

export default Carousel;