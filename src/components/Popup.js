import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Popup = () => {
	

	const containerVariants = {
		hidden: {
		    opacity: 0,
		    x: '100vh'
		},
	    visible : {
		    opacity: 1,
		    x: 0,
		    transition: {
		        type: 'spring',
		        delay: 0.01
		    }
	    },
	    exit: {
	        x: '-100vh',
	        transition: {ease: 'easeInOut'}
	    }
	}

	const modalVariants = {
		hidden: {
		    opacity: 0,
		    y: '-100vh'
		},
	    visible : {
		    opacity: 1,
		    y: '-100px',
		    transition: {
		        type: 'spring',
		        delay: 0.7
		    }
	    },
	    exit: {
	        y: '100vh',
	        transition: {ease: 'easeInOut'}
	    }
	}


	return (
		<motion.div 
		    variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		    className="flex justify-center items-center p-12 w-screen h-screen bg-bgash opacity-0 backdrop-blur"
		>
			<motion.div 
			    variants={modalVariants}
			    className="text-blackk w-[26rem] p-4 text-center bg-white rounded-xl flex flex-col gap-4 items-center shadow-xl"
			>
				<h3 className="text-hk-grotesk font-bold text-lg md:text-2xl">Hey Idan,</h3>
				<p className="text-open-sans font-normal text-base md:text-lg">For now your imagination ends here</p>
				<Link to="/">
				    <button className="bg-bground w-[7rem] h-[3rem] rounded-full text-hk-grotesk text-lg font-bold text-white hover:text-bground hover:border-2 hover:border-bground hover:bg-white">Ok</button>
				</Link>	
			</motion.div>
		</motion.div>
	)
}

export default Popup