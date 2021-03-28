import PropTypes from 'prop-types';

const ButtonComponent = (props) => {
    // props la` tat ca cac props dc truyen vao component khi su dung
    return (
        <>
            <button 
                type={props.type}
                onClick = {props.click}
            >{props.children}</button>
        </>
    )
}

ButtonComponent.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    click: PropTypes.func.isRequired
}
export default ButtonComponent;