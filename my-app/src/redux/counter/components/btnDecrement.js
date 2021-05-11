import React from 'react'

// import {useDispatch, useSelector } from 'react-redux'
import { decrementNumber } from '../actions/index';
import {connect } from 'react-redux'



const ButtonDecrement = (props) => {
    // const count = useSelector(state => state.counter.count);
    // const dispatch = useDispatch();
    return (
        <>
        {/* <button
        onClick={()=> dispatch(incrementNumber(count))}
        >
            +
        </button> */}
        <button
        // onClick={()=> dispatch(incrementNumber(count))}
        onClick = {() => props.decrement(props.count)}
        >
            -
        </button>
        </>
    )
}
const mapStateToProps = state => ({
    count : state.counter.count,
})
const mapDispatchToProps = dispatch => ({
    decrement: val=>dispatch(decrementNumber(val)),
})
const connectButtonDecrement = connect(mapStateToProps,mapDispatchToProps)(ButtonDecrement)
export default React.memo(connectButtonDecrement)