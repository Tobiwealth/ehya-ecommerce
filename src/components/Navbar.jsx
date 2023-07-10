import React, {useState} from 'react';
import { motion } from "framer-motion";
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = () => {
	const quantity = useSelector(state => state.cart.totalQuantity);
	const [closeMobile, setCloseMobile] = useState(false);
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	}

	const navLinkStyles = ({isActive}) => {
		return{
			borderBottom: isActive? "4px solid rgba(252, 90, 90, 1)" : "",
			color: isActive? "rgba(252, 90, 90, 1)" : ""
		}
	}

	return (
		<nav className="flex justify-center w-screen h-24 sticky top-0 bg-white z-50">
			<div className="flex flex-col items-center w-full lg:hidden ">
				<div className="w-full flex justify-between items-center p-8">
					<img src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/Logo.png" alt="logo"/>
					<NavLink className=" hover:scale-125 active:scale-125 flex justify-center items-center text-2xl" to="/cart"><i className="fa-solid fa-cart-shopping"></i><span className="text-center bg-bground w-6 h-6 p-0 rounded-full text-white text-base -translate-x-4 -translate-y-4 z-100">{quantity}</span></NavLink>
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
						<NavLink onClick={()=>setCloseMobile(false)} className="hover:text-white hover:scale-125 " to="/">Home</NavLink>
						<NavLink onClick={()=>setCloseMobile(false)} className="hover:text-white hover:scale-125 " to="/about">About</NavLink>
						<NavLink onClick={()=>setCloseMobile(false)} className="hover:text-white hover:scale-125 " to="/newarrival">New Arrivals</NavLink>
						<NavLink onClick={()=>setCloseMobile(false)} className="hover:text-white hover:scale-125 " to="/faqs">FAQs</NavLink>
						<NavLink onClick={()=>setCloseMobile(false)} className="hover:text-white hover:scale-125 " to="/">Login</NavLink>
					</ul>
				</motion.div>
			</div>
			<div className="hidden lg:flex justify-between items-center w-full h-full p-12">
				<div>
					<img src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/Logo.png" alt="logo"/>
				</div>
				<ul className="flex flex-row items-center gap-10 text-open-sans text-blackk font-semibold text-lg p-4">
					<NavLink className="hover:text-bground hover:border-b-4 hover:border-b-bground " style={navLinkStyles} to="/">Home</NavLink>
					<NavLink className="hover:text-bground hover:border-b-4 hover:border-b-bground " style={navLinkStyles} to="/about">About</NavLink>
					<NavLink className="hover:text-bground hover:border-b-4 hover:border-b-bground " style={navLinkStyles} to="/newarrival">New Arrivals</NavLink>
					<NavLink className="hover:text-bground hover:border-b-4 hover:border-b-bground " style={navLinkStyles} to="/faqs">FAQs</NavLink>
					<button className="text-center p-2 rounded-lg w-40 border-2 border-bgblue text-bgblue hover:text-white hover:bg-bgblue hover:border-none">
					    <NavLink to="/">Login</NavLink>
					</button>
					<NavLink className="ml-8 text-2xl flex justify-center items-center" to="/cart"><i className="fa-solid fa-cart-shopping"></i><span className="text-center bg-bground w-6 h-6 p-0 rounded-full text-white text-base -translate-x-4 -translate-y-4 z-100">{quantity}</span></NavLink>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;