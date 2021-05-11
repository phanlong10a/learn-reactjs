import React from 'react';
import InputAdd from '../components/input'
import ListWork from '../components/listWork'

import {Row, Col} from 'antd'


const AppTodo = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <InputAdd/>
                    <ListWork/>
                </Col>
            </Row>
        </>
    )
}
export default React.memo(AppTodo)