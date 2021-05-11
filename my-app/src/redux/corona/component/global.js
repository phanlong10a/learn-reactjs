import React from 'react';

import { Card, Col, Row } from 'antd';



const Global = () => {
    // constructor(props){
    //     super(props)
    // }
    return(
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Confirm" bordered={true}>
                        <p>New Confirmed: </p>
                        <p>Total Confirmed:</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Deaths" bordered={true}>
                    <p>NewDeaths:</p>
                    <p>TotalDeaths:</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Recovered" bordered={true}>
                        <p>NewRecovered:</p>
                        <p>TotalRecovered: </p>
                    </Card>
                </Col>
            </Row>
        </div> 
    )
            
}

export default React.memo(Global);