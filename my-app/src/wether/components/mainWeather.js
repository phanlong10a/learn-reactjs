import { Card } from 'antd';

const MainComponent = (props) => {

    return(
        <>
         <Card title="Thông tin thời tiết" bordered={false} style={{ width: 300 }}>
            <p> - Nhiệt độ: {props.data.temp_min} - {props.data.temp_max} </p>
            <p> - Áp suất: {props.data.pressure} </p>
            <p> - Độ ẩm:  {props.data.humidity}</p>
        </Card>
        </>
    )
}
export default MainComponent;