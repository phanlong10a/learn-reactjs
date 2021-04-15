import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


const FooterMovie = () => {
    return(
        <Footer style={{ textAlign: 'center' }}>developed by long</Footer>
    )
}
export default React.memo(FooterMovie)