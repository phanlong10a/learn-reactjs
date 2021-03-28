import{useState, useEffect} from 'react'
import { Row, Col } from 'antd'
import ListMovie from './components/listMovie';
import PaginationMovie from './components/pagination';
import {popularityMovies} from './sevice/api';
import SwitchLanguage from './components/switchLanguage';





const AppMovie = () => {

    const[loading,setLoading] = useState(false);    
    const[movies,setMovies] = useState([]);     
    const[language,setLanguage] = useState('vi-VN');     
    const[totalItems,setTotalItems] = useState(0);
    const[page,setPage] = useState(1);

    // same same componentDidMount, componentDidUpdate trong class 
    useEffect(()=>{
        setLoading(true)
        const getDataFromApi = async () => {
            const dataMovie = await popularityMovies(language, page);
            if(dataMovie){
                await setMovies(dataMovie.results);
                await setTotalItems(dataMovie.total_results)
                
            }
            setLoading(false);
        }
        getDataFromApi();
    },[language])
     
    const changeLanguage = (lang = 'en-US') => {
        setLanguage(lang);
    }   
    
    console.log(movies);
    return(
        <>
            <Row>
                <Col span={20} offset={2}>
                    <SwitchLanguage
                        change = {setLanguage}
                    />
                    <ListMovie
                    
                    loading={loading}
                    listMovie={movies}
                    
                    />
                    { movies.length > 0 && <PaginationMovie
                        page={page}
                        totalItems={totalItems}
                    />}
                </Col>
            </Row>

        </>


    )
}
export default AppMovie;