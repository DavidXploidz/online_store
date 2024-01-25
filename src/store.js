import { createStore } from 'vuex';

export default createStore({
    state:{
        msg: 'Vuex desde Cero / Vuex from the scratch',
        cart: [],
        copyCart: [],
        item: {},
        numberCart: 0,
    },
    mutations:{
        handleRemoveItemCart( state ){
            state.cart = state.copyCart
            state.numberCart = state.cart.length;
        },
        handleAddCart( state ){
            state.cart = [state.item, ...state.cart,]
            localStorage.setItem('cart', JSON.stringify(state.cart));
            state.numberCart = state.cart.length;
        },
    },
    actions:{
        removeItemCartAction( context ){
            context.commit('handleRemoveItemCart')
        },
        addCartAction( context ){
            context.commit('handleAddCart')
        }
    },
    getters:{
        getCart(state){
            state.cart = JSON.parse(localStorage.getItem('cart'));
            return state.cart;
        },
    }
})