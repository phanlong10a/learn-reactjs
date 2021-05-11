import * as types from './type'

export const requestDataServer = () => ({
    type: types.REQUEST_SERVER
});


//  các action đc saga dispath vao reducer trong store
export const loadingGetData = (loading) => ({
    type: types.START_GET_DATA,
    loading
}) 
export const endLoadingGetData = (loading) => ({
    type: types.START_GET_DATA,
    loading
}) 
export const getDataServerSuccess = (data) => ({
    type: types.GET_DATA_SUCCESS,
    data
})
export const getDataServerFail = (err) => ({
    type: types.GET_DATA_FAIL,
    err
})

