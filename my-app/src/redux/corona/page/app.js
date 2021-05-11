import React from 'react'

import Countries from '../component/countries'
import Global from '../component/global'




const AppCorona = () => {
    return (
        <>
        <Countries/>
        <Global/>
        </>
    )
}
export default React.memo(AppCorona)