import { Card } from 'antd';

const OrtherComponent = () => {

    return(
        <>
         <Card title="Thông tin Khác" bordered={false} style={{ width: 300 }}>
            <p> - Sức gió: </p>
            <p> - Tầm nhìn:  </p>
            <p> - Lượng mưa:  </p>
        </Card>
        </>
    )
}
export default OrtherComponent;