import{ Input } from 'antd'


const { Search } = Input


const SearchWeather = (props) =>{
    return(
        <Search 
            span={20} offset={2} 
            placeholder="input search text"
            enterButton="Search"
            size="large"
            loading={props.loading}
            onSearch={(city) => props.search(city)}

        />
    )
}
export default SearchWeather;