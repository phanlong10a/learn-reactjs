import React from 'react'
import BtnIncrement from '../components/btnIncrement';
import BtnDecrement from '../components/btnDecrement';
import Result from '../components/resuilt';

const AppCounter = () => {
    
    return (
        <>
            <Result/>
            <BtnDecrement/>
            <BtnIncrement/>
        </>
    )
}
export default React.memo(AppCounter)