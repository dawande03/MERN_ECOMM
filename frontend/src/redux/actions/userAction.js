import axios from "axios"
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstant"
import { baseUrl } from "../../config"

export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })
        const config = {
            headers: {
                "Contnet-Type": "application/json"
            }
        }
        const { data } = await axios.post(baseUrl + 'users/login', { email, password }, config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem("userInfo", JSON.stringify(data))
        window.location.href = '/'

    } catch (error) {
        const payload = error.response && error.response.data.message
            ? error.response.data.message
            : error.message;

        dispatch({
            type: USER_LOGIN_FAIL,
            payload: payload
        })
    }

    // } catch (error) {
    //     dispatch({
    //         type: USER_LOGIN_FAIL,
    //         payload: error.response && error.response.data.message
    //         ? error.response.data.message
    //         : error.message
    //     })
    // }
}

export const register = (name, email, password) => async (dispatch) => {

    try {
        dispatch({ type: USER_REGISTER_REQUEST })
        const config = {
            headers: {
                "Contnet-Type": "application/json"
            }
        }
        const { data } = await axios.post(baseUrl + "users", { name, email, password }, config)
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        });
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        window.location.href = '/'
    } catch (error) {
        const payload = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: payload
        })
    }
};

export const getUserDetails =  (id, getState) =>async (dispatch)=>{
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "Contnet-Type": "application/json",
                "Authorization": `Bearer ${userInfo.token}`
            }
        };
        const { data } = await axios.get(baseUrl + `users/profile/${id}`, config)
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type:USER_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message :error.message
        })
    }
};