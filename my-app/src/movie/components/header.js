
import React from 'react';
import { useHistory } from "react-router-dom";

import { Layout, Menu } from 'antd';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { helper } from '../helper/common'


const DivLogo = styled.div`
    float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);

`

const { Header } = Layout;
const HeaderMovie = () => {
  const history = useHistory();
  const info = helper.decodeTokenFromLocalStorage();
  const logOutUser = () =>{
    helper.removeToken()
    history.push('/login')
  }
    return(
        <Header>
        <DivLogo/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['popular']}>
        <Menu.Item key="/search">
            <Link to="/search">Tìm kiếm</Link>
            </Menu.Item>
        <Menu.Item key="/popular">  <Link to="/popular">Phổ biến</Link></Menu.Item>
        <Menu.Item key="/upcoming">Sắp chiếu</Menu.Item>
        {
           info === null &&
          <Menu.Item key="/login">  <Link to="/login">Đăng nhập</Link></Menu.Item>
        }
        
       
        
        { info !== null && info !== '' &&
        <>
          <Menu.Item key = "/logout" onClick={()=>logOutUser()}><Link to="/logout"> Đăng Xuất</Link></Menu.Item>

          <Menu.Item key="">  {info.username} </Menu.Item>
          </>
          }
      </Menu>
    </Header>
    )
}
export default React.memo(HeaderMovie)