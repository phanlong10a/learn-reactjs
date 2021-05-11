import * as types from './types'


export const incrementNumber = (val) => {
    return{
        type: types.INCREMENT,
        payload: { val }
    }
}
export const decrementNumber = (val) => {
    return{
        type: types.DECREMENT,
        payload: { val }
    }
}