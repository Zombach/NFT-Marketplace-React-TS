import { CardMarketplace } from '@resources/moq/Marketplace';
import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { RootState } from '@src/store/Store';

interface Cart {
  products: CardMarketplace[];
  totalPrice: number;
}

const initialState: Cart = {
  products: [],
  totalPrice: 1000,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CardMarketplace>) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<CardMarketplace>) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

console.log("products", state.cart.products);

export const { addToCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cartState.products;
export const selectCartItemsSum = (state: RootState) =>
  state.cartState.products.reduce((acc, current: CardMarketplace) => {
    return acc + current.price;
  }, 0);

export const cartReducer = cartSlice.reducer;
