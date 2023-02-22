import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionTypes"
import axios from "axios"



export const register = (newUser) => async(dispatch)=>{
    dispatch({
        type:REGISTER
    })
    try {
        const res = await axios.post("/user/register",newUser)
        console.log(res)
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type:REGISTER_FAIL,
            payload:error.response.data
        })
    }
}


export const login = (user) => async(dispatch)=>{
    dispatch({
        type:LOGIN
    })
    try {
        const res = await axios.post("/user/login",user)
        console.log(res)
        localStorage.setItem("token",res.data.token)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data.user
        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data
        })
    }
}

export const getProfile = () => async(dispatch) => {
    const token = localStorage.getItem("token")
    dispatch({
        type:GET_PROFILE
    })
    const config = {
        headers : {
            Authorization:token
        }
    }
    try {
        const res = await axios.get("/user/getProfile",config)
        console.log(res)
        dispatch({
            type:GET_PROFILE_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:GET_PROFILE_FAIL,
            payload:error.response.data
        })
    }
}


