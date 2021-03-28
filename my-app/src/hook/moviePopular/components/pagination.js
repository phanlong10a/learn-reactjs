import { Pagination, Row, Col} from 'antd';


const PaginationMovie = (props) => {
    return (
        <>
            <Row>
                <Col span={20} offset={2}>
                    <div style ={{textAlign:'center', marginTop: '30px'}}>
                    <Pagination 
                    pageSize={5}
                    current={props.page}
                    total={props.totalItem}
                    showSizeChanger={false} 
                    onChange="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default PaginationMovie;