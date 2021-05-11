import {combineReducers} from 'redux';

import {coronaReducer} from './reducer/corona-reducer'

const rootReducer = combineReducers({

    corona: coronaReducer
})

export default rootReducer