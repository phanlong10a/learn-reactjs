import PropTypes from 'prop-types';
import React from 'react';


const ButtonComponent = (props) => {
    // props la` tat ca cac props dc truyen vao component khi su dung
    console.log('button rendering')
    return (
        <>
            <button 
                type={props.type}
                onClick = {props.click}
            >Giai? Phuong* Trinh`
            </button>
        </>
    )
}

ButtonComponent.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    click: PropTypes.func.isRequired
}
export default React.memo(ButtonComponent);