import React from 'react';
import CardItem from './CardItem';

const CardList = () => {
	let url = "http://localhost:1337";

	return (
		<div className="grid place-items-center border-t-2 p-4">
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-10 p-8 md:p-12 lg:p-16">
				<CardItem src={`${url}/uploads/iconspace_Tshirt_5ff7d57a57.png`} name="Fashion"/>
				<CardItem src={`${url}/uploads/iconspaceandroidphone_28a4bfe901.png`} name="Handphone"/>
				<CardItem src={`${url}/uploads/iconspace_Notebook_81afa237c7.png`} name="Laptop"/>
				<CardItem src={`${url}/uploads/iconspace_Not_C_831d97b093.png`} name="Music"/>
				<CardItem src={`${url}/uploads/iconspace_Camera_b45d8cd393.png`} name="Photography"/>
				<CardItem src={`${url}/uploads/iconspace_Chair_0e61a27ff5.png`} name="Furniture"/>
				<CardItem src={`${url}/uploads/iconspace_Stethoscope_6f2930e792.png`} name="Health"/>
				<CardItem src={`${url}/uploads/iconspace_Soccer_Ball_cf43322e16.png`} name="Sports"/>
				<CardItem src={`${url}/uploads/iconspace_Controller_6e14995431.png`} name="Games"/>
				<CardItem src={`${url}/uploads/iconspace_Gold_fd34d11944.png`} name="Investment"/>
				<CardItem src={`${url}/uploads/iconspace_Ticket_ebf4b8fa60.png`} name="Ticket"/>
				<CardItem src={`${url}/uploads/iconspace_Apps_0a7e5b0a6e.png`} name="More Category"/>
			</div>
		</div>
	)
}

export default CardList;