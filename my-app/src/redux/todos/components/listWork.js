import React from 'react';
import { removeWork, doneWork } from '../actions/todo'
import {Row, Col, List, Checkbox} from 'antd'
import {
    DeleteOutlined
  } from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';


const ListWork = () => {


    const count = useSelector(state => state.todo.listWork);
    console.log(count)
    const dispatch = useDispatch();
    const data = count

    const removeTask = (id) => {
        dispatch(removeWork(id))
    }
    const finish = (id) => {
        dispatch(doneWork(id))
    }

    const styleFinish = {
        textDecoration: 'line-through',
        color: 'red'
    }

    return (
        <>
        <Row style ={{margin: '20px 0px'}}>
         <Col span={12} offset={6}>
         <List
            itemLayout="horizontal"
            bordered
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                style={item.done ? styleFinish : null}
                avatar={<Checkbox
                            onChange={() => {finish(item.id)}}
                />}
                title={item.name}
                />
                <button
                onClick={()=> removeTask(item.id)}
                ><DeleteOutlined /></button>
            </List.Item>
            )}
        />
         </Col>
        </Row>
        </>
    )
}
export default React.memo(ListWork)