import React, {useState, useEffect} from 'react'
import { Row, Col, Skeleton, Image, Button } from 'antd'
import MasterLayout from '../../components/masterLayout'
import {
    useParams
} from "react-router-dom";
import 'react-modal-video/css/modal-video.min.css'
import ModalVideo from 'react-modal-video'

import {api} from '../../service/api'
import {helper} from '../../helper/common'

const DetailMovie = () => {
    const [loading,setLoading] = useState(false)
    const [detail, setDetail] = useState({})
    const {id} = useParams();
    const [isOpen, setOpen] = useState(false)
    

    useEffect(()=>{
        const getData = async () =>{
            setLoading(true);
            const data = await api.getDetailMovieById(id);
            if(!helper.IsEmptyObject(data)){
                setDetail(data)
            }
            setLoading(false)
            
        }
        getData()
    },[id])

    if(loading || helper.IsEmptyObject(detail)){
        return(
            <MasterLayout>
                <Skeleton active/>
            </MasterLayout>
        )

    }
    const link = helper.IsEmptyObject(detail.videos.results) ?  'https://www.youtube.com/watch?v=fXpJlk0sTGU' : detail.videos.results[0].key 
    
    return (<MasterLayout>
        <Row style={{margin:'30px 0px'}}>
            <Col span={8}>
                <Image src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`}/>
    <h1>{detail.original_title}</h1>
    <p>{detail.relase_date}</p>
            </Col>
            <Col span={8}>
                <p>
                    {detail.overview}
                </p>
                <p>số sao : {detail.vote_average}</p>
                <p>lượt bình chọn: {detail.vote_count}</p>
                <React.Fragment>
                        
                            
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={link} onClose={() => setOpen(false)} />
                               
                            <Button type="primary" onClick={()=> setOpen(true)}>Xem demo</Button >
                        
                        
                </React.Fragment>
            </Col>
            <Col span={8}>
                    {detail.images.backdrops.map((item, index)=>( 
                <Image
                    key={index}
                    alt={detail.original_title} 
                    src={`https://image.tmdb.org/t/p/w300/${item.file_path}`}
                    style={{marginBottom: '20px'}}
                >
                </Image>
                  ))}
                </Col>
            
        </Row>

    </MasterLayout>)
}
export default DetailMovie