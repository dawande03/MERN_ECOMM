import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {productDetailsReducer, productListReducer} from './redux/reducers/productReducer'
import { cartReducer } from "./redux/reducers/cartReducer";
import { userDetailsReducer, userLoginReducer, userRegisterReducer } from "./redux/reducers/userReducer";


// ALL REDUCERS
const reducer = combineReducers({
    productList : productListReducer,
    productDetails:productDetailsReducer,
    cart: cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails: userDetailsReducer,
});

// GET DATA FROM localStorage
const userInfoFormStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")):[]
const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]

const initialState = {
    cart:{cartItems:cartItemsFromStorage},
    userLogin:{userInfo:userInfoFormStorage}
};

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;