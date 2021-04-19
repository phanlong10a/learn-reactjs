import React from 'react'
import HeaderMovie from './header'
import FooterMovie from './footer'
import PropTypes from 'prop-types'
import { Layout} from 'antd';
import styled from 'styled-components'



const SiteLayoutContent = styled.div`
    min-height: 280px;
    padding: 24px;
    background: #fff;
`
const { Content} = Layout;

const MasterLayoutMovie = (props) => {
    return(
        <Layout>
            <HeaderMovie/>
            <Content style={{ padding: '0 50px' }}>
            <SiteLayoutContent>{props.children}</SiteLayoutContent>
            </Content>
            <FooterMovie/>
        </Layout>
    )
}
MasterLayoutMovie.propTypes = {
    children: PropTypes.node.isRequired
}
export default React.memo(MasterLayoutMovie)