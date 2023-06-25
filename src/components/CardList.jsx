import React from 'react';
import CardItem from './CardItem';
import iconspaceGold from '../images/iconspaceGold.png';
import iconspaceandroidphone from '../images/iconspaceandroidphone.png';
import iconspaceApps from '../images/iconspaceApps.png';
import iconspaceCamera from '../images/iconspaceCamera.png';
import iconspaceChair from '../images/iconspaceChair.png';
import iconspaceController from '../images/iconspaceController.png';
import iconspaceNotC from '../images/iconspaceNotC.png';
import iconspaceNotebook from '../images/iconspaceNotebook.png';
import iconspaceSoccerBall from '../images/iconspaceSoccerBall.png';
import iconspaceStethoscope from '../images/iconspaceStethoscope.png';
import iconspaceTicket from '../images/iconspaceTicket.png';
import iconspaceTshirt from '../images/iconspaceTshirt.png';

const CardList = () => {
	return (
		<div className="grid place-items-center">
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-10 p-8 md:p-12 lg:p-16">
				<CardItem src={iconspaceTshirt} name="Fashion"/>
				<CardItem src={iconspaceandroidphone} name="Handphone"/>
				<CardItem src={iconspaceNotebook} name="Laptop"/>
				<CardItem src={iconspaceNotC} name="Music"/>
				<CardItem src={iconspaceCamera} name="Photography"/>
				<CardItem src={iconspaceChair} name="Furniture"/>
				<CardItem src={iconspaceStethoscope} name="Health"/>
				<CardItem src={iconspaceSoccerBall} name="Sports"/>
				<CardItem src={iconspaceController} name="Games"/>
				<CardItem src={iconspaceGold} name="Investment"/>
				<CardItem src={iconspaceTicket} name="Ticket"/>
				<CardItem src={iconspaceApps} name="More Category"/>
			</div>
		</div>
	)
}

export default CardList;