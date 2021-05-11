import { call, all } from 'redux-saga/effects'
import { watchGetDataCorona } from "./saga/corona-saga";



export default function* rootSaga() {
    yield all(call[
        watchGetDataCorona
    ])
}