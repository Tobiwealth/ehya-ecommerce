import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import { Schema } from "../validation/Schema";
import {motion} from 'framer-motion';

const Checkout = () => {
	const [isChecked, setIsChecked] = useState(false);
	const navigate = useNavigate();

	const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleModal = () => {
    	navigate("/popup");
    }
	const formik = useFormik({
		initialValues:{
			firstName:"",
			lastName:"",
			email:"",
			address1:"",
			address2:"",
			city:"",
			zip:"",
			country:"",
			zipcode:"",
			address1_ship:"",
			address2_ship:"",
			city_ship:"",
			zip_ship:"",
			country_ship:"",
			zipcode_ship:""
		},
		validationSchema: Schema,
		onSubmit: () => {
			//setShowModal(true);
		}
	})


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
		    className="flex justify-center items-center p-5 md:p-10 lg:p-20 bg-bgash w-full"
		>
			<form autoComplete="off" className=" w-full lg:w-4/5 " >
			    <h2 className="text-center text-hk-grotesk font-bold text-lg md:text-2xl lg:text-4xl text-blackk p-8">Checkout</h2>
			    <div className="flex flex-col gap-4 bg-white p-5 w-full mb-10">
			        <h2 className="text-hk-grotesk text-blackk font-bold text-base md:text-xl mb-4">1. PERSONAL INFORMATION</h2>
			        <div className="flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-10 w-full">
					    <div className="flex flex-col w-full md:w-1/2">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="firstName">First Name<span className="ml-2 text-red-600">*</span></label>
					    	<input
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="firstName" 
					    	    placeholder="Enter your first name"
					    	    value={formik.values.firstName}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.firstName && formik.touched.firstName && <p className="text-firebrick pl-2">{formik.errors.firstName}</p>}
					    </div>
					    <div className="flex flex-col w-full md:w-1/2">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="lastName">Last Name<span className="ml-2 text-red-600">*</span></label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="lastName" 
					    	    placeholder="Enter your last name"
					    	    value={formik.values.lastName}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.lastName && formik.touched.lastName && <p className="text-firebrick pl-2">{formik.errors.lastName}</p>}
					    </div>
				    </div>
				    <div className="flex flex-col">
				    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="email">Email<span className="ml-2 text-red-600">*</span></label>
				    	<input 
				    	    className="border-2 border-greyy w-full h-10 p-3" 
				    	    type="email" name="email" 
				    	    placeholder="Enter your E-mail"
				    	    value={formik.values.email}
						    onChange={formik.handleChange}
						    onBlur={formik.handleBlur}
				    	/>
				    	{formik.errors.email && formik.touched.email && <p className="text-firebrick pl-2">{formik.errors.email}</p>}
				    </div>
			    </div>
			    <div className="flex flex-col bg-white p-5 w-full ">
			        <h2 className="text-hk-grotesk text-blackk font-bold text-base md:text-xl mb-4">2. BILLING ADDRESS</h2>
			        <div className="grid md:grid-cols-2 gap-4 lg:gap-y-4 lg:gap-x-10">
					    <div className="flex flex-col">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="address1">Street Address<span className="ml-2 text-red-600">*</span></label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="address1" 
					    	    placeholder="e.g 1, ransome kuti road"
					    	    value={formik.values.address1}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
							/>
							{formik.errors.address1 && formik.touched.address1 && <p className="text-firebrick pl-2">{formik.errors.address1}</p>}
					    </div>
					    <div className="flex flex-col ">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="address2">Street Address 2 (optional)</label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="address2" 
					    	    placeholder="e.g #55034"
					    	    value={formik.values.address2}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.address2 && formik.touched.address2 && <p className="text-firebrick pl-2">{formik.errors.address2}</p>}
					    </div>
					    <div className="flex flex-col ">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="city">City<span className="ml-2 text-red-600">*</span></label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="city" 
					    	    placeholder="e.g lagos"
					    	    value={formik.values.city}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.city && formik.touched.city && <p className="text-firebrick pl-2">{formik.errors.city}</p>}
					    </div>
					    <div className="flex flex-col">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="zip">Zip/Postal<span className="ml-2 text-red-600">*</span></label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="zip" 
					    	    placeholder="e.g 10001"
					    	    value={formik.values.zip}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.zip && formik.touched.zip && <p className="text-firebrick pl-2">{formik.errors.zip}</p>}
					    </div>
					    <div className="flex flex-col ">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="country">Country<span className="ml-2 text-red-600">*</span></label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="country" 
					    	    placeholder="e.g Nigeria"
					    	    value={formik.values.country}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.country && formik.touched.country && <p className="text-firebrick pl-2">{formik.errors.country}</p>}
					    </div>
					    <div className="flex flex-col ">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="zipcode">Zip Code<span className="ml-2 text-red-600">*</span></label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="zipcode" 
					    	    placeholder="e.g 10001"
					    	    value={formik.values.zipcode}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.zipcode && formik.touched.zipcode && <p className="text-firebrick pl-2">{formik.errors.zipcode}</p>}
					    </div>
				    </div>
			    </div>
			    <div className="p-3">
			        <input className="scale-125" checked={isChecked} onChange={handleCheckboxChange} name="check" type="checkbox"/>
			    	<label className="ml-2 text-open-sans font-normal text-blackk text-sm md:text-base" htmlFor="check">Same for shipping Address</label>
			    </div>
			    <div className="flex flex-col bg-white p-5 w-full ">
			        <h2 className="text-hk-grotesk text-blackk font-bold text-base md:text-xl mb-4">3. SHIPPING ADDRESS</h2>
			        <div className="grid md:grid-cols-2 gap-4 lg:gap-y-4 lg:gap-x-10">
					    <div className="flex flex-col">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="address1_ship">Street Address</label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="address1_ship" 
					    	    placeholder="e.g 1, ransome kuti road"
					    	    value={isChecked ? formik.values.address1 : formik.values.address1_ship}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
							/>
							{formik.errors.address1 && formik.touched.address1 && <p className="text-firebrick pl-2">{formik.errors.address1}</p>}
					    </div>
					    <div className="flex flex-col ">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="address2_ship">Street Address 2 (optional)</label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="address2_ship" 
					    	    placeholder="e.g #55034"
					    	    value={isChecked ? formik.values.address2 : formik.values.address2_ship}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.address2 && formik.touched.address2 && <p className="text-firebrick pl-2">{formik.errors.address2}</p>}
					    </div>
					    <div className="flex flex-col ">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="city">City</label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="city" 
					    	    placeholder="e.g lagos"
					    	    value={isChecked ? formik.values.city : formik.values.city_ship}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.city && formik.touched.city && <p className="text-firebrick pl-2">{formik.errors.city}</p>}
					    </div>
					    <div className="flex flex-col">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="zip">Zip/Postal</label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="zip" 
					    	    placeholder="e.g 10001"
					    	    value={isChecked ? formik.values.zip : formik.values.zip_ship}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.zip && formik.touched.zip && <p className="text-firebrick pl-2">{formik.errors.zip}</p>}
					    </div>
					    <div className="flex flex-col ">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="country">Country</label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="country" 
					    	    placeholder="e.g Nigeria"
					    	    value={isChecked ? formik.values.country : formik.values.country_ship}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.country && formik.touched.country && <p className="text-firebrick pl-2">{formik.errors.country}</p>}
					    </div>
					    <div className="flex flex-col ">
					    	<label className="font-semibold text-open-sans text-greyy text-md" htmlFor="zipcode">Zip Code</label>
					    	<input 
					    	    className="border-2 border-greyy w-full h-10 p-3" 
					    	    type="text" name="zipcode" 
					    	    placeholder="e.g 10001"
					    	    value={isChecked ? formik.values.zipcode : formik.values.zipcode_ship}
							    onChange={formik.handleChange}
							    onBlur={formik.handleBlur}
					    	/>
					    	{formik.errors.zipcode && formik.touched.zipcode && <p className="text-firebrick pl-2">{formik.errors.zipcode}</p>}
					    </div>
				    </div>
				    
			    </div>
			    <div className="mt-10">
			    	<button onClick={handleModal} type="submit" className="w-full h-12 p-2 bg-bground text-open-sans font-bold text-lg text-white">Continue</button>
			    </div>
			</form>
			
		</motion.div>
	)
}

export default Checkout;