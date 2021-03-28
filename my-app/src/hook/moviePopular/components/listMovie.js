import {Row, Col, Card, Skeleton} from 'antd';

const { Meta } = Card;


const ListMovie = (props) =>{
    if(props.loading || props.listMovie.length ===0 ){
        return(
            <>
                <Skeleton active/>
            </>
        )
    }
    const phim = props.listMovie.filter(data => data.poster_path !== null)
            return(
                <>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {/* {props.listmovie.results.filter((item) => item.poster_path!==null)} */}
                        {phim.map((item, index) => (
                            <Col className="gutter-row" span={6}>
                            <Row style={{marginTop: ' 20px'}} justify = 'center'>
                                <Card
                                hoverable
                                style={{ width: 240, marginBottom: '30px' }}
                                cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                                >
                                <Meta title={item.title} />
                                </Card>
                            </Row>
                        </Col>
                        ))}
                    </Row>
                </>
                )
}
export default ListMovie;