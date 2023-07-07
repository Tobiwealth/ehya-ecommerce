import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		itemsList: [],
		productList: [],
		totalQuantity: 0,
		subtotalPrice: 0
	},
	reducers:{
		addToCart(state,action){
			const newItem = action.payload;
			// to check if the item is available
			const existingItem = state.itemsList.find((item)=> item.id === newItem.id);
			if(existingItem){
				existingItem.quantity++;
				existingItem.totalPrice += newItem.attributes?.price;
				state.subtotalPrice += newItem.attributes?.price;
			}else{
				state.itemsList.push({
					id: newItem?.id,
					price: newItem?.attributes?.price,
					oldPrice: newItem?.attributes?.oldprice,
					quantity: 1,
					totalPrice: newItem?.attributes?.price,
					url: newItem?.attributes?.image?.data?.attributes?.url,
					description: newItem?.attributes?.description, 
					name:newItem?.attributes?.name
				});
				state.totalQuantity++;
				state.subtotalPrice += newItem?.attributes?.price;
			}
		},
		removeFromCart(state, action){
			const id = action.payload;
			const existingItem = state.itemsList.find(item=> item.id === id);
			if (existingItem.quantity === 1){
				return state.existingItem;
			}else{
				existingItem.quantity--;
				existingItem.totalPrice -= existingItem.price;
				state.subtotalPrice -= existingItem.price;
			}
		},
		addCart(state, action){
			const id = action.payload;
			const existingItem = state.itemsList.find(item=> item.id === id);
			state.subtotalPrice += existingItem.price;
			existingItem.quantity++;
			existingItem.totalPrice += existingItem.price;
		},
		deleteFromCart(state, action){
			const id = action.payload;
			const existingItem = state.itemsList.find(item=> item.id === id);
			if (existingItem.quantity){
				state.itemsList = state.itemsList.filter(item => item.id !== id);
				state.totalQuantity -= 1;
				state.subtotalPrice -= existingItem.totalPrice;
			}else{
				return state.existingItem;
			}
		},
		addProducts(state, action) {
			state.productList = action.payload;
		}
	}
})

export const cartActions = cartSlice.actions;
export default cartSlice;