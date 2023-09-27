import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '@models/Product';
import { RootState } from '@src/store/Store';
import { calculateTotalPrice } from '@src/utils/CalculateTotalPrice';

export type ProductItem = Product & { count: number };

interface Cart {
  products: ProductItem[];
  totalPrice: number;
}

const initialState: Cart = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const findItem = state.products.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.products.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calculateTotalPrice(state.products);
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
      state.totalPrice = calculateTotalPrice(state.products);
    },
    clearCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
    changeProductCount: (state, action: { payload: { productId: number; count: number } }) => {
      const { productId, count } = action.payload;
      const findItem = state.products.find((obj) => obj.id === productId);

      if (findItem) {
        findItem.count = count;
      }

      state.totalPrice = calculateTotalPrice(state.products);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, changeProductCount } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cartState.products;
export const selectCartItemsSum = (state: RootState) => state.cartState.totalPrice;

export const cartReducer = cartSlice.reducer;
