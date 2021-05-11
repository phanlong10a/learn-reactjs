import * as types from './type'

export const addWork = (name, id) => ({
    type: types.ADD_WORK,
    payload: {name, id }
})
export const removeWork = (id) => ({
    type: types.REMOVE_WORK,
    payload: {id}
})
export const doneWork = (id) => ({
    type: types.DONE_WORK,
    payload: {id}
})