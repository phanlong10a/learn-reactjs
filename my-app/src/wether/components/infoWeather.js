import { Card } from 'antd';

const InfoComponent = (props) => {

    return(
        <>
         <Card title="Thông tin thời tiết" bordered={false} style={{ width: 300 }}>
            <p> - Thời tiết: {props.data[0].main} </p>
            <p> - Chi tiết: {props.data[0].description} </p>
            <img src={`http://openweathermap.org/img/w/${props.data[0].icon}.png`}></img>
        </Card>
        </>
    )
}
export default InfoComponent;