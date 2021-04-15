import MasterLayoutMovie from '../../components/masterLayout';
import React from 'react'


const PopularMoviePage = () => {
    return (
        <MasterLayoutMovie>
            <h1>this is Popular Page</h1>
        </MasterLayoutMovie>
    )
}
export default React.memo(PopularMoviePage)