import InputSearchMovie from './components/input'
import ListMovie from './components/listMovie'
import { Pagination, Row, Col} from 'antd';
import { useState } from 'react';
import { searchMovies } from './sevice/api'
// import axios from 'axios';



function SearchMovie(params) {

    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const [keyword, setKeyword] = useState("");
    const[totalItem, setTotalItem] = useState(0);
    const[page, setPage] = useState(1)

    const searchMovieByKey = async (nameMovie, p = 1) => {
        if(nameMovie !== '')
        {
        await setKeyword(nameMovie);
        await setPage(p);
        await setLoading(true);
        const dataMovie = await searchMovies(nameMovie,page);
        if (dataMovie) {
            await setMovie(dataMovie.results);
            await setTotalItem(dataMovie.total_results)
        }

        await setLoading(false);
        }
    }

    console.log(movie);

    return (
        <>
            <InputSearchMovie
                search = {searchMovieByKey}
                loading = {loading}
            />
            <ListMovie
                listMovie= {movie}
            />
            {movie.length !==0 && (<Row>
                <Col span={20} offset={2}>
                    
                        <div style ={{textAlign:'center', marginTop: '30px'}}>
                        <Pagination 
                            pageSize={20}
                            current={page}
                            total={totalItem} 
                            showSizeChanger={false} 
                            onChange={ pages => searchMovieByKey(keyword, pages)} />
                        </div>
                    
                </Col>
            </Row>)}
        </>
    )
}
export default SearchMovie;