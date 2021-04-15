import{ Card} from 'antd'
import WeatherContext from '../context/weatherContext';
import {useContext} from 'react';
// import WeatherContext from '../context/weatherContext'


const InfoWeather = (props) => {
    // const cont = useContext(WeatherContext)
    // const info = cont.weather;
    // console.log(info)
    return (
        <>
                {/* <Card title="Card title" bordered={true} >
                <p> - Thời tiết: {info.main} </p>
                <p> - Chi tiết: {info.description} </p>
                <img src={`http://openweathermap.org/img/w/${info.icon}.png`}></img>
                </Card> */}
        </>
    )
}
export default InfoWeather;