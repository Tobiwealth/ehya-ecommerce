import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		itemsList: [],
		productList: [],
		soldItemsList:[],
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
				existingItem.totalPrice += newItem?.price;
				state.subtotalPrice += newItem?.price;
			}else{
				state.itemsList.push({
					id: newItem?.id,
					price: newItem?.price,
					oldPrice: newItem?.oldprice,
					quantity: 1,
					totalPrice: newItem?.price,
					imageUrl: newItem?.imageUrl,
					description: newItem?.description, 
					name:newItem?.name
				});
				state.totalQuantity++;
				state.subtotalPrice += newItem?.price;
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
		},
		addsoldProducts(state, action) {
			state.soldItemsList = action.payload;
		}
	}
})

export const cartActions = cartSlice.actions;
export default cartSlice;