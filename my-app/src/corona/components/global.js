import React, { PureComponent } from 'react';

import { Card, Col, Row, Skeleton } from 'antd';

import CoronaContext from '../context/myContext'

class Global extends PureComponent{
    // constructor(props){
    //     super(props)
    // }
    render() {

      return (
        <>
            <CoronaContext.Consumer>
                {context => {
                    console.log(context);
                    if(context.loading || context.virus.length === 0){
                        return <Skeleton active/>
                    }
                    return(
<div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Confirm" bordered={true}>
                                <p>New Confirmed: {context.virus.Countries[186].NewConfirmed}</p>
                                <p>Total Confirmed:{context.virus.Countries[186].TotalConfirmed}</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Deaths" bordered={true}>
                            <p>NewDeaths:{context.virus.Countries[186].NewDeaths}</p>
                            <p>TotalDeaths:{context.virus.Countries[186].TotalDeaths}</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Recovered" bordered={true}>
                                <p>NewRecovered:{context.virus.Countries[186].NewRecovered} </p>
                                <p>TotalRecovered: {context.virus.Countries[186].TotalRecovered}</p>
                            </Card>
                        </Col>
                    </Row>
                </div> 
                    )
                    
                }
                    
                }
            </CoronaContext.Consumer>
            
        </>
      )
    };
}

export default Global;