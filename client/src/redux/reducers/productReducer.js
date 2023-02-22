const { GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, ADD_PRODUCTS, ADD_PRODUCTS_FAIL, ADD_PRODUCTS_SUCCESS, DELETE_PRODUCTS, DELETE_PRODUCTS_SUCCESS, DELETE_PRODUCTS_FAIL, EDIT_PRODUCTS, EDIT_PRODUCTS_FAIL, EDIT_PRODUCTS_SUCCESS } = require("../actionTypes");



const init = {
    products:[],
    details:[],
    newProd:[],
    loading:false,
    errors:null
}

const productReducer = (state=init,{type,payload}) =>{

    switch (type) {
        case GET_PRODUCTS:
        case GET_PRODUCT:
        case ADD_PRODUCTS:
        case DELETE_PRODUCTS:
        case EDIT_PRODUCTS:
            return {
                ...state,loading:true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,loading:false,products:payload
            }    
        case GET_PRODUCTS_FAIL:
        case GET_PRODUCT_FAIL:
        case ADD_PRODUCTS_FAIL:
        case DELETE_PRODUCTS_FAIL:
        case EDIT_PRODUCTS_FAIL:
            return {
                ...state,loading:false,errors:payload
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,loading:false,details:payload.data
                }  
        case ADD_PRODUCTS_SUCCESS:
            return {
                ...state,loading:false,products:[...state.products,payload]
            }  
            case DELETE_PRODUCTS_SUCCESS:
                return {
                    ...state,loading:false,products:state.products.filter(el=>el._id!==payload.id)
                }
            case EDIT_PRODUCTS_SUCCESS:
                return {
                    ...state,loading:false,products:state.products.map(el=>el._id===payload.X?payload.data:el)
                }
    
        default:
            return state;
    }
}
export default productReducer