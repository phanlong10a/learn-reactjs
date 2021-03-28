import { Input, Row, Col } from 'antd';
import PropsType from 'prop-types'



const { Search } = Input;

const InputSearchMovie = (props) => {

    return (
        <>
            <Row style ={{marginTop: '5px'}}>
                <Col span = {18} offset={3}>
                    <Search placeholder="tên phim ..," enterButton="Search" size="large" loading={props.loading} onSearch={val=>props.search(val)}/>
                </Col>
            </Row>
        </>
    )
}

InputSearchMovie.propsType = {
    search: PropsType.func.isRequired
}

export default InputSearchMovie;