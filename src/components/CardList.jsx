import React from 'react';
import CardItem from './CardItem';

const CardList = () => {
	

	return (
		<div className="grid place-items-center border-t-2 p-4">
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-10 p-8 md:p-12 lg:p-16">
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceTshirt.png" name="Fashion"/>
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceandroidphone.png" name="Handphone"/>
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceNotebook.png" name="Laptop"/>
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceNotC.png" name="Music"/>
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceCamera.png" name="Photography"/>
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceChair.png" name="Furniture"/>
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceStethoscope.png" name="Health"/>
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceSoccerBall.png" name="Sports"/>
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceController.png" name="Games"/>
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceGold.png" name="Investment"/>
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceTicket.png" name="Ticket"/>
				<CardItem src="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/image/iconspaceApps.png" name="More Category"/>
			</div>
		</div>
	)
}

export default CardList;