import React from 'react';
//import axios from 'axios';
import Herosection from '../components/Herosection';
import Products from '../components/Products';
import HotItems from '../components/HotItems';
import CardList from '../components/CardList';
import MostSoldItems from '../components/MostSoldItems';
import Blog from '../components/Blog';
import FooterCard from '../components/FooterCard';
import {motion} from 'framer-motion';
import { ReactComponent as AnimatedSvg } from '../assets/Spinner.svg';
import {useSelector} from 'react-redux';


const Home = () => {
	const loading = useSelector(state => state.ui.isLoading);
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
		>
		    {
		    	loading ?
		    	    <div className="p-20 mt-12"><AnimatedSvg/></div> :
		    	        (<div>
		    	        	<Herosection/>
							<Products/>
							<HotItems />
							<CardList />
							<MostSoldItems/>
							<Blog/>
							<FooterCard/>
		    	        </div>)
		    }
			
		</motion.div>

	)
}

export default Home;