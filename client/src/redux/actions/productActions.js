import { ADD_PRODUCTS, ADD_PRODUCTS_FAIL, ADD_PRODUCTS_SUCCESS, DELETE_PRODUCTS, DELETE_PRODUCTS_FAIL, DELETE_PRODUCTS_SUCCESS, EDIT_PRODUCTS, EDIT_PRODUCTS_FAIL, EDIT_PRODUCTS_SUCCESS, GET_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from "../actionTypes"
import axios from "axios"


export const getProducts = () => async(dispatch)=> {
    dispatch({
        type : GET_PRODUCTS
      }) 
    try {
        const {data} = await axios.get("/product/get_products")
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload:data
        })
      
    } catch (error) {
        dispatch({
            type:GET_PRODUCTS_FAIL,
            payload:error.response.data,
        })
    }
}

export const getProduct = (id) => async(dispatch)=> {
    dispatch({
        type : GET_PRODUCT
      }) 
    try {
        const {data} = await axios.get(`/product/get_products/${id}`)
        console.log(data)
        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload:{id,
                    data}
        })
      
    } catch (error) {
        dispatch({
            type:GET_PRODUCT_FAIL,
            payload:error.response.data,
        })
    }
}


export const addProduct = (newProduct) => async (dispatch)=> {
    const token = localStorage.getItem("token")
    dispatch({
        type:ADD_PRODUCTS
    })
    const config = {
        headers : {
            Authorization:token
        }}
    try {
        const {data} = await axios.post('/product/add_products',newProduct,config)
        console.log(data)
        dispatch({
            type: ADD_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
      dispatch({
        type: ADD_PRODUCTS_FAIL,
        payload: error.response.data
      })  
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    const token = localStorage.getItem("token")
    dispatch({
        type:DELETE_PRODUCTS
    })
    const config = {
        headers : {
            Authorization:token
        }}
    try {
      const {data} = await axios.delete(`/product/delete_products/${id}`,config)  
      console.log(data)
      dispatch({
        type: DELETE_PRODUCTS_SUCCESS,
        payload: {id,
            data}  
    })
    } catch (error) {
       dispatch({
        type: DELETE_PRODUCTS_FAIL,
        payload: error.response.data
       })
    }
}

export const editProduct =(editProduct)=> async (dispatch) =>  {
    const token = localStorage.getItem("token")
    dispatch({
        type:EDIT_PRODUCTS
    })
    const config = {
        headers : {
            Authorization:token
        }}
    try {
        const {data} = await axios.put(`/product/edit_product/${editProduct.x}`,editProduct,config)
        dispatch({
            type: EDIT_PRODUCTS_SUCCESS,
            payload: {X:editProduct.x,
                data}  
        })
    } catch (error) {
        dispatch({
            type: EDIT_PRODUCTS_FAIL,
            payload: error.response.data
           })  
    }
}
