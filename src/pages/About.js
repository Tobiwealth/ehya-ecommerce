import React from 'react';
import {motion} from 'framer-motion';


const About = () => {
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
		    className="flex justify-center items-center p-8 md:p-16 lg:p-24 bg-bgash"
		>
			<div className="text-center">
			    <h1 className="text-hk-grotesk font-bold text-blackk text-lg md:text-3xl p-4">About Ehya store</h1>
			    <p className="text-open-sans font-normal text-hero-text text-base md:text-xl p-16 pt-4">
			        Welcome to Ehya store where we make vivid imaginations come true 😉.
			        <p>Buy your favorite wrist watches and other items without paying</p>
			    </p>
			</div>
		</motion.div>
	)
}

export default About;