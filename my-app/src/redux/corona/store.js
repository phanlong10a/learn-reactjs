import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootSaga from './saga';

import rootReducer from './reducer';


const sagaMiddleware = createSagaMiddleware();

const confiureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(logger, sagaMiddleware)
        )
        // then run the saga
        sagaMiddleware.run(rootSaga);
        return {store}
}

export default  confiureStore