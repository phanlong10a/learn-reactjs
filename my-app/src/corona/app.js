import React, { PureComponent } from 'react';
import CountriesComponent from './components/countries';
import GlobalComponent from './components/global';
import {Row, Col} from 'antd';
import CoronaProvider from './context/coronaProvider';

class AppCorona extends PureComponent{



    render() {
      return (
        <div>
            <Row>
                <Col span='20' offset ='2'>
                    <CoronaProvider>
                        <GlobalComponent/>
                        <CountriesComponent/>
                    </CoronaProvider>
                    
                </Col>
            </Row>
        </div>
      )
    };
}
export default AppCorona