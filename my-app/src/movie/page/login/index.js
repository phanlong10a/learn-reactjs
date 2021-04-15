import {Row,Col,Form, Input, Button, Checkbox} from 'antd';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { api } from "../../service/api"
import { helper } from '../../helper/common'


// import MasterLayout from '../../components/masterLayout';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
const LoginPages =()=>{
  const [errorLogin, setErrorLogin]= useState('');
    const history = useHistory()
    const onFinish = (values) => {
        console.log('Success:', values);
        // if(values.username === 'admin' && values.password ==='123'){
        //     history.push('/')
        // }
        let user = values.username;
        let pass = values.password;
        let token = api.checkUserLogin(user, pass);
        if(token !== null){
          console.log(token);
          setErrorLogin('');
          helper.saveToken(token);
          history.push('/')
        } else {
          setErrorLogin('sai roi`')
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return(
        <>
        <Row>
            <Col span={12} offset={6}>
              <h2 style={{ textAlign: 'center', color: 'red'}}>
                {errorLogin}
              </h2>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </Col>
        </Row>
        </>
    )
}
export default LoginPages;