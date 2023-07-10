import React, {useEffect} from 'react';
import {Alert} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {uiActions} from '../store/UiSlice';

const Notification = () => {
	const notification = useSelector(state => state.ui.notification);
	const dispatch = useDispatch();

	useEffect(()=>{
		setTimeout(()=>{
			dispatch(uiActions.showNotification({
			    open:false
		    }))
		},6000)
	},[notification,dispatch])
	return (
		<div 
		    className="sticky top-24 left-0 z-10"
		>
			{notification.open && <Alert severity={notification.type}>{notification.message}</Alert>}
		</div>
	)
}

export default Notification;