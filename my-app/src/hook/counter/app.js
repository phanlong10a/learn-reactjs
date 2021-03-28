import ButtonComponent from './component/button'
import ResultComponent from './component/result'
import {useState} from 'react'

function AppHookCounter() {
    // khai bao state va phuong thuc cap nhat state

    const [count, setCount] = useState(0);
    /*
        this.state = {count: 0}
    */


    const inCrementCount = () => {
        setCount(count+1);
    };
    const deCrementCount = () => {
        setCount(count-1);
    };
    return (
        <>
            <ResultComponent count={count}></ResultComponent>
            <ButtonComponent
                type='button' 
                click = {inCrementCount}
            >+</ButtonComponent>
            <ButtonComponent
                type='button'
                click = {deCrementCount}
            >-</ButtonComponent>
        </>

    )
}
export default AppHookCounter;