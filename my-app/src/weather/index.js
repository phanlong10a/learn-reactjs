import WeatherPovider from './context/weatherProvider';
import WeatherContext from './context/weatherContext';
import MainComponent from './components/mainWeather';
import InfoComponent from './components/infoWeather';
import OrtherComponent from './components/otherWeather';
import {useContext} from 'react';
import {Row, Col} from 'antd';
import {helper} from './helper/common'

const IndexComponent = ()=> {
    const cont = useContext(WeatherContext);
    // console.log(cont)
    return(
        <>
         <WeatherPovider>
        <WeatherContext.Consumer>
            {context => {
                if(!helper.IsEmptyObject(context.weather))
                {
                    // console.log(context);
                    // console.log(context.loading);
                    return(
                        <Row gutter={16}>
                        <Col span={8}>
                            <MainComponent data={context.main}/>
                        </Col>
                        <Col span={8}>
                            <InfoComponent data={context.weather}/>
                        </Col>
                        <Col span={8}>
                        <OrtherComponent data={context.main}/>
                        </Col>
                        </Row>
                    )
                }
            }
            }
        </WeatherContext.Consumer>
        </WeatherPovider>
       
        </>
    )
}
export default IndexComponent;