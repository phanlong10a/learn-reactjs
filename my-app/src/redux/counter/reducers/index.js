// nơi gộp các reducer lại


import { combineReducers } from 'redux'

import { counterReducer } from './counter-reducer'


const rootReducer = combineReducers({
    counter: counterReducer
})


export default rootReducer