import * as types from '../action/type';


const initialState = {
    loading: false,
    virus: {},
    err: null
}

export const coronaReducer = (state = initialState, action ) => {
    switch(action.type){
        case types.START_GET_DATA:
            return {
                ...state,
                loading: action.loading
            }
        case types.END_GET_DATA: 
        return {
            ...state,
            loading: action.loading
        }
        case types.GET_DATA_SUCCESS:
            return{
                ...state,
                virus: action.data,
                err: null  
            }
        case types.GET_DATA_FAIL:
            return{
                ...state,
                virus: {},
                err: action.err
            }
        default: return state;
    }
}