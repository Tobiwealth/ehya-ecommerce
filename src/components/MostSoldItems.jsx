import React from 'react';
import MostSoldCamera from './mostSoldComponents/MostSoldCamera';
import MostSoldHeadphones from './mostSoldComponents/MostSoldHeadphones';
import MostSoldLaptop from './mostSoldComponents/MostSoldLaptop';

const MostSoldItems = () => {

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-10 lg:p-16 w-full border-b-2">
	        <MostSoldLaptop/>
	        <MostSoldCamera/>
	        <MostSoldHeadphones/>
		</div>
	)
}

export default MostSoldItems;