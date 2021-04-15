import React, {useContext} from 'react'
import {Row, Col, Avatar, Image} from 'antd'
import MovieContext from '../context/index'


const HeaderMovie = () => {
    const info = useContext(MovieContext)
    console.log(info)
    return (
        <>
        <Row>
            <Col span = {20}></Col>
            <Col span ={4}>
                <span>hi : {info.email}</span>
                <Avatar
                    src={<Image src={info.avatar} />}
                />
            </Col>
        </Row>
        </>
    )
}
export default React.memo(HeaderMovie)