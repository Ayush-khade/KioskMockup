interface cartStateProp {
    products: any;
    cartItems: any;
    totalAmount: number;
    tax: number;
    loading:boolean;
}
const cartState = {
    products: [],
    cartItems: [],
    totalAmount: 0,
    tax: 1,
    loading: true
};

export const cartReducer = (state: cartStateProp = cartState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case 'ADD_RIDE':
            return {
                ...state,
                cartItems:state.cartItems.concat([action.payload]),
                totalAmount:state.totalAmount+action.payload.productPrice
            };
        default:
            return state;
    }
};