import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './CartSlice';
import uiSlice from './UiSlice';

const store = configureStore({
	reducer:{
		cart: cartSlice.reducer,
		ui: uiSlice.reducer,
	}
});
export default store;