import React , {useState} from 'react';
import MasterLayout from '../../components/masterLayout';
import {Row, Col} from 'antd';
import { DatePicker } from 'antd';
import {api} from '../../service/api';
import {helper} from '../../helper/common'
import ListMovie from '../../components/listMovie'
import PaginationMovie from '../../components/paginationMovie'
const { RangePicker } = DatePicker;

 const UpcommingMoviePage = ()=>{
     const [loading,setLoading] = useState(false);
     const [page, setPage] = useState(1);
     const [tdate, setToDate] = useState('');
     const [fdate, setFromDate] = useState('');
     const [comingMovies, setComingMovies] = useState({});
     const [totalItem, setTotalItem] = useState(0);

    const getChooseDate = async (t1, t2,p=1) => {
        setLoading(true);
        setPage(p);
        setFromDate(t2[0]);
        setToDate(t2[1]);
        let movies = await api.getDataUpcomingMovie(fdate,tdate,page);
        if(movies.hasOwnProperty('results')){
            setComingMovies(movies.results);
            setTotalItem(movies.total_results);
        }
        console.log(comingMovies);
        setLoading(false);
    }
     return(
         <MasterLayout>
             <Row>
                 <Col span={24}>
                    <RangePicker
                    onChange={(d1,d2) => getChooseDate(d1,d2)} />
                </Col>
             </Row>
             {
                 !helper.IsEmptyObject(comingMovies) 
                 && !loading 
                 && 
                 <ListMovie
                 loading={loading}
                 movies= {comingMovies}/>
                 
             }
             {
                 !helper.IsEmptyObject(comingMovies) &&
                 !loading &&
                 <PaginationMovie
                    current={page}
                    total={totalItem}
                    fdate= {fdate}
                    tdate={tdate}
                    change={getChooseDate}
                 
                 
                 />
             }
        
         </MasterLayout>
     )
 }
 export default UpcommingMoviePage;