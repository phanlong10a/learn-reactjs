import { call, put, takeEvery,  } from 'redux-saga/effects'
import {api} from '../service/api'
import {helper} from '../helper/common'
import {REQUEST_SERVER } from '../action/type'
import * as actions from '../action/index'


function* getDataCoronaSaga(){
    try {
        yield put(actions.loadingGetData(true));
        const virus  = yield call(api.getDataVirusCorona())
        if(!helper.IsEmptyObject(virus)){
            yield put(actions.getDataServerSuccess(virus))
        }
        else{
            yield put(actions.getDataServerFail({
                cod: 404,
                message: 'Site Not Found'
            }))
        }
    } catch (e) {
        
    }
    finally {

        // dispatch action loading getdata vao reducer
        // ket thuc viec call api
        yield put(actions.endLoadingGetData(false))
    }
}
export function* watchGetDataCorona() {
    yield takeEvery(REQUEST_SERVER, getDataCoronaSaga)
}