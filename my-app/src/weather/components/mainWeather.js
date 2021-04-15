import{ Card} from 'antd'
import WeatherContext from '../context/weatherContext';

import {useContext} from 'react';
// import MyContext from '../../corona/context/myContext';



const MainWeather = (props) => {
    // const cont = useContext(WeatherContext)
    // const info = cont.weather.main;
    // console.log(info)
    return (
        <>
                {/* <Card title="Card title" bordered={true} >
                <p> - Nhiệt độ: {info.temp_min} - {info.temp_max} </p>
            <p> - Áp suất: {info.pressure} </p>
            <p> - Độ ẩm:  {info.humidity}</p>
                </Card> */}
        </>
    )
}
export default MainWeather;