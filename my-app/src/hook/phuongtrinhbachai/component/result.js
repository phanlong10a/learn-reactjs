import PropTypes from 'prop-types'

const ResultComponent = (props) => (
    <>
        <h1>{props.result}</h1>
    </>

)

ResultComponent.propTypes = {
    count: PropTypes.number
}

export default ResultComponent;
