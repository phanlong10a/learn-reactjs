import React from 'react'
// import {useDispatch, useSelector} from 'react-redux'
import {connect } from 'react-redux'
import { incrementNumber } from '../actions/index'

const ButtonIncrement = (props) => {
    console.log(props)
    // const count = useSelector(state => state.counter.count);
    // const dispatch = useDispatch();
    return (
        <>
        {/* <button
         onClick={()=> dispatch(decrementNumber(count))}
        > - </button> */}
        <button
        onClick = {() => props.increment(props.count)}
        > + </button>
        </>
    )
}
const mapStateToProps = state => ({
    count : state.counter.count,
})
const mapDispatchToProps = dispatch => ({
    increment: val=>dispatch(incrementNumber(val)),
})
const connectButtonIncrement = connect(mapStateToProps,mapDispatchToProps)(ButtonIncrement)
export default React.memo(connectButtonIncrement)