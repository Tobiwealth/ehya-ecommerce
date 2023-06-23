import React from 'react';
import Herosection from '../components/Herosection';
import Products from '../components/Products';
import HotItems from '../components/HotItems';
import CardList from '../components/CardList';

const Home = () => {
	return (
		<div>
			<Herosection/>
			<Products/>
			<HotItems/>
			<CardList/>
		</div>
	)
}

export default Home;