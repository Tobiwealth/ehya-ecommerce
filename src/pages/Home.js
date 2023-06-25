import React from 'react';
import Herosection from '../components/Herosection';
import Products from '../components/Products';
import HotItems from '../components/HotItems';
import CardList from '../components/CardList';
import MostSoldItems from '../components/MostSoldItems';
import Blog from '../components/Blog';
import FooterCard from '../components/FooterCard';

const Home = () => {
	return (
		<div>
			<Herosection/>
			<Products/>
			<HotItems/>
			<CardList/>
			<MostSoldItems/>
			<Blog/>
			<FooterCard/>
		</div>
	)
}

export default Home;