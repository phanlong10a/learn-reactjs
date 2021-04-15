import MasterLayoutMovie from '../../components/masterLayout';
import React from 'react'
import {helper} from '../../helper/common'

const SearchMoviePage = () => {
    const info = helper.decodeTokenFromLocalStorage();
    console.log(info)
    return (
        <MasterLayoutMovie>
            {/* <h1 style={{color: 'red'}}> {info.username}</h1> */}
            <h1>this is search Page</h1>
        </MasterLayoutMovie>
    )
}
export default React.memo(SearchMoviePage)