import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: "ui",
	initialState: {
		isLoading: false,
		notification: {
			message:"",
			type:"success",
			open: false
		}
	},
	reducers:{
		setIsloadingtrue(state){
			state.isLoading = true;
		},
		setIsloadingfalse(state){
			state.isLoading = false;
		},
		showNotification(state,action){
			state.notification = {
				message: action.payload.message,
				type: action.payload.type,
				open: action.payload.open
			}
		}
	}
})

export const uiActions = uiSlice.actions;
export default uiSlice;