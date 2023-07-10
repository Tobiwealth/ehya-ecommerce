import React, {useState} from 'react';
import {motion} from 'framer-motion';

const Faqs = () => {
	const [toggleArrow, setToggleArrow] = useState(false);
	const handleToggleArrow = () => {
	    setToggleArrow(!toggleArrow);
    };

    const containerVariants = {
		hidden: {
		    opacity: 0,
		    x: '100vw'
		},
	    visible : {
		    opacity: 1,
		    x: 0,
		    transition: {
		        type: 'spring',
		        delay: 0.5
		    }
	    },
	    exit: {
	        x: '-100vw',
	        transition: {ease: 'easeInOut'}
	    }
	}

	return (
		<motion.div 
		    variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		    className="p-8 pt-6 md:p-16 md:pt-8 lg:p-24 lg:pt-10 bg-bgash"
		>
			<div className=" ">
				<div className="text-center text-hk-grotesk p-2 lg:p-10 mb-8 lg:mt-4">
					<h1 className="text-black2 text-xl font-bold md:text-3xl pb-2 lg:p-4">Frequently Asked Questions</h1>
					<p className="text-lg font-medium text-hero-text text-lg md:text-xl p-2 lg:p-3">Got questions? We have answers!</p>
				</div>
				<div>
					<div className="flex flex-col border-b border-greyy pt-4 pb-4 lg:pt-8 lg:pb-8">
						<h1 className="flex justify-between items-center text-base lg:text-3xl font-semibold text-blackk pb-4">
						    Why is this store called ehya? {toggleArrow ? <div onClick={handleToggleArrow}><i className="fa-solid fa-chevron-up cursor-pointer lg:text-2xl text-greyy" ></i></div> : <div onClick={handleToggleArrow}><i className="fa-solid fa-chevron-down cursor-pointer lg:text-2xl text-greyy" ></i></div>}
						</h1>
						{toggleArrow && <p className="text-sm lg:text-2xl font-normal text-greyy">Well, at the end of the day, we are going to say "ehya! good imagination" </p>}
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Faqs;