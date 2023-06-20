import React, {useState} from 'react';
import Logo from '../images/Logo.png';
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';

const Navbar = () => {
	const [closeMobile, setCloseMobile] = useState(false);
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	}

	return (
		<nav className="flex justify-center w-screen h-24 sticky top-0 bg-white z-50">
			<div className="flex flex-col items-center w-full lg:hidden ">
				<div className="w-full flex justify-between items-center p-8">
					<img src={Logo} alt="logo"/>
					{
						closeMobile ? 
						    <div onClick={() => setCloseMobile(false)} ><i className="fas fa-times" style={{fontSize:'27px'}}></i></div> 
						        : <div onClick={() => setCloseMobile(true)}><i className="fa-solid fa-bars" style={{fontSize:'27px'}}></i></div>
					}
				</div>
				<motion.div
				    animate={closeMobile ? "open" : "closed"}
                    variants={variants}
                    className="w-full "
				>
					<ul className="flex flex-col items-center gap-10 p-10 bg-bground w-full text-blackk text-open-sans font-bold text-lg">
						<Link onClick={()=>setCloseMobile(false)} className="hover:text-white hover:scale-125 active:scale-125 active:text-white" to="/">Home</Link>
						<Link onClick={()=>setCloseMobile(false)} className="hover:text-white hover:scale-125 active:scale-125 active:text-white" to="">Landings</Link>
						<Link onClick={()=>setCloseMobile(false)} className="hover:text-white hover:scale-125 active:scale-125 active:text-white" to="">Pages</Link>
						<Link onClick={()=>setCloseMobile(false)} className="hover:text-white hover:scale-125 active:scale-125 active:text-white" to="/">Doc</Link>
						<Link onClick={()=>setCloseMobile(false)} className="hover:text-white hover:scale-125 active:scale-125 active:text-white" to="/">Help</Link>
						<Link onClick={()=>setCloseMobile(false)} className="hover:text-white hover:scale-125 active:scale-125 active:text-white" to="/">Get it now</Link>
					</ul>
				</motion.div>
			</div>
			<div className="hidden lg:flex justify-between items-center w-full h-full p-12">
				<div>
					<img src={Logo} alt="logo"/>
				</div>
				<ul className="flex flex-row items-center gap-10 text-open-sans text-blackk font-semibold text-lg p-4">
					<Link className="hover:text-bground hover:border-b-4 hover:border-b-bground active:text-bground active:border-b-4 active:border-b-bground" to="/">Home</Link>
					<Link className="hover:text-bground hover:border-b-4 hover:border-b-bground active:text-bground active:border-b-4 active:border-b-bground" to="/">Landings</Link>
					<Link className="hover:text-bground hover:border-b-4 hover:border-b-bground active:text-bground active:border-b-4 active:border-b-bground" to="/">Pages</Link>
					<Link className="hover:text-bground hover:border-b-4 hover:border-b-bground active:text-bground active:border-b-4 active:border-b-bground" to="/">Docs</Link>
					<Link className="hover:text-bground hover:border-b-4 hover:border-b-bground active:text-bground active:border-b-4 active:border-b-bground" to="/">Help</Link>
					<button className="text-center p-2 rounded-lg w-40 border-2 border-bgblue text-bgblue hover:text-white hover:bg-bgblue hover:border-none active:text-white active:bg-bgblue active:border-none">
					    <Link to="/">Get it now</Link>
					</button>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;