import React from 'react'
import Products from '../components/Products';
import {motion} from 'framer-motion';

const Product = () => {
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
		    className="flex justify-center items-center p-8 lg:p-16 bg-bgash w-full "
		>
			<Products/>
		</motion.div>
	)
}

export default Product