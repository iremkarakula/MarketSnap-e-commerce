import { createSlice } from '@reduxjs/toolkit'




const initialState = {

    items: JSON.parse(localStorage.getItem("cart")) || [],
    subtotal: 0,
    shipping: 20.00,
    total: 0,


}


export const calculateSubTotal = (items) => {
    if (!Array.isArray(items)) {
        console.error("Expected 'items' to be an array, but got:", items);
        return 0;
    }
    return items.reduce((subtotal, item) => subtotal + (item.discountedPrice || item.price) * item.quantity, 0);
};
const calculateTotal = (items, shipping) => {
    return calculateSubTotal(items) + shipping;
}
const calculateShipping = (items) => {
    return calculateSubTotal(items) > 800 ? 0 : 20.00;
}
const updateCartState = (state) => {
    state.subtotal = calculateSubTotal(state.items);
    state.shipping = calculateShipping(state.items);
    state.total = calculateTotal(state.items, state.shipping);
};

initialState.subtotal = calculateSubTotal(initialState.items);
initialState.shipping = calculateShipping(initialState.items);
initialState.total = calculateTotal(initialState.items, initialState.shipping);


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const i = state.items.find(e => e.id === action.payload.id);
            if (i) {
                i.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload)
            }
            updateCartState(state);
            localStorage.setItem("cart", JSON.stringify(state.items))

        },
        increaseQuantity: (state, action) => {
            const i = state.items.find(e => e.id === action.payload.id);
            if (i) {
                i.quantity += 1;
                updateCartState(state);

                localStorage.setItem("cart", JSON.stringify(state.items))
            }


        },
        decreaseQuantity: (state, action) => {
            const i = state.items.find(e => e.id === action.payload.id);
            if (i) {
                i.quantity = i.quantity > 1 ? i.quantity - 1 : 1;
                updateCartState(state);
                localStorage.setItem("cart", JSON.stringify(state.items))
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            updateCartState(state);
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        clearCart: (state) => {
            state.items = [];
            updateCartState(state);
            localStorage.removeItem("cart");
        }
    }

},

);

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer


