import { Menu, Dropdown, Button} from 'antd';
import { DownOutlined, StarOutlined } from '@ant-design/icons';

const SwitchLanguage = (props) => {
    const MenuLanguage = () => (
        <Menu onClick={(e) => {
            props.change(e.key);
        }} >
          <Menu.Item key="vi-VN" icon={<StarOutlined />}>
            Tiếng Việt
          </Menu.Item>
          <Menu.Item key="en-US" icon={<StarOutlined />}>
            Tiếng Anh
          </Menu.Item>
          
        </Menu>
      );
    
      return (
        <Dropdown overlay={MenuLanguage}>
          <Button>
            Change Language <DownOutlined />
          </Button>
        </Dropdown>
      )
}
export default SwitchLanguage;