import AppCorona from './page/app'
import React from 'react'
import  {Provider} from 'react-redux'
import confiureStore from './store';

const {store} = confiureStore();

const Corona = () => {
    console.log(store)
    return (
        <Provider store={store}>
        <AppCorona/>
        </Provider>
    )
}
export default React.memo(Corona)