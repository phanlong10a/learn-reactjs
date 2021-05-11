import React from 'react'
// import {useDispatch, useSelector } from 'react-redux'
import {connect } from 'react-redux'



const Result = (props) => {
    // const count = useSelector(state => state.counter.count);
    // const dispatch = useDispatch();
    return (
        <>
        <h1>{props.count}</h1>
        </>
    )
}
const mapStateToProps = state => ({
    count : state.counter.count,
})
const connectButtonIncrement = connect(mapStateToProps, null)(Result)
export default React.memo(connectButtonIncrement)