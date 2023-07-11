import React from 'react';
import {useSelector} from 'react-redux';
import MostSoldCamera from './mostSoldComponents/MostSoldCamera';
import MostSoldHeadphones from './mostSoldComponents/MostSoldHeadphones';
import MostSoldLaptop from './mostSoldComponents/MostSoldLaptop';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MostSoldItems = () => {
	const soldProduct = useSelector(state => state.cart.soldItemsList);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		//autoplay: true,
		speed: 500,
		//autoplaySpeed: 2000,
		//cssEase: "linear",
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
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 0
				}
            },
            {
                breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0
				}
            }
        ]
    };

	return (
		<div className="w-full p-3">
			<Slider {...settings}>
				<div className="p-12 pb-0 md:p-2 flex justify-center items-center">
				    <MostSoldLaptop product={soldProduct}/>
				</div>
				<div className="p-12 pb-0 md:p-2 flex justify-center items-center">
				    <MostSoldCamera product={soldProduct}/>
				</div>
				<div className="p-12 pb-0 md:p-2 flex justify-center items-center">
				    <MostSoldHeadphones product={soldProduct}/>
				</div>
			</Slider>
		</div>
	)
}

export default MostSoldItems;