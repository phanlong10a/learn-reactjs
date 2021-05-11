import AppCounter from './container/app'
import configureStore from './store/configStore'

import { Provider } from 'react-redux'

const store = configureStore();
const Counter = () => {
    return (
        <Provider store={store}>
        <AppCounter/>
        </Provider>
    )
}
export default Counter;