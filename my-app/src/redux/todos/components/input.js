import React from 'react'
import {Row, Col, Input} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import { addWork } from '../actions/todo'

const {Search} = Input;
const InputAdd = () => {
    const id = useSelector(state=> state.todo.idTodo);
    const dispatch = useDispatch();

    const add = (name) => {
        if(name.length > 0){
            dispatch(addWork(name, id));
            
        }
    }
    return (
        <>
        <Row style={{margin: '30px 0px'}}>
            <Col span={12} offset={6}>
            <Search
                placeholder="nhập công việc"
                allowClear
                enterButton="Thêm"
                size="large"
                onSearch={val => add(val)}
            />
            </Col>
        </Row>
        </>
    )

}
export default React.memo(InputAdd)