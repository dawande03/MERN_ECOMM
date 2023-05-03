import axios from 'axios'
import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCESS,
    PRODUCT_DETAILS_REQUEST
} from '../constants/Productconstants';
import { baseUrl } from '../../config';

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get(baseUrl + "products")
        dispatch({
            type: PRODUCT_LIST_SUCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
};

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        })
        const { data } = await axios.get(baseUrl + `product/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
};

