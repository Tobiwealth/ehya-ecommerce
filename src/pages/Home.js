import React, {useState,useEffect} from 'react';
//import axios from 'axios';
import Herosection from '../components/Herosection';
import Products from '../components/Products';
import HotItems from '../components/HotItems';
import CardList from '../components/CardList';
import MostSoldItems from '../components/MostSoldItems';
import Blog from '../components/Blog';
import FooterCard from '../components/FooterCard';

const Home = () => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try{
				const response = await fetch("http://localhost:1337/api/products?populate=*", {
					headers: {
				        Authorization : "Bearer e47738a2164727590016aae94cad06acd330c805500c9e321f1ebc01dcd4dd8f5c239c6d4f271c1ffeec146e59a81ed71d27148147a8806c628c088c5ed3e82c8b4ab5a38b04b042ca07f3c750f2ef06b87d918ae1bad2fc58624e8dd5340a41c262cf12230c98bf67e19cdaf591ee0a68779f488e59d108acf86e4eccbe24fe" 
				    }
			    });
			    const res = await response.json();
			    setProduct(res.data);  
			}catch(err){
				console.log(err);
			}
		};
		fetchData();
	},[])

    console.log(product);

	return (
		<div>
			<Herosection/>
			<Products product={product}/>
			<HotItems product={product}/>
			<CardList />
			<MostSoldItems/>
			<Blog product={product}/>
			<FooterCard/>
		</div>
	)
}

export default Home;