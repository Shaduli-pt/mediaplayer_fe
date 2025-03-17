import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allApi'


function View({uploadVideoStatus}) {

  const [deleteVideoStatus,setDeleteVideoStatus] = useState([])

  const [allVideos, setAllVideos] = useState([])
  const getVideos = async () => {
    const resp = await getAllVideos()
    const {data} = resp;
    setAllVideos(data)
  }
  useEffect(()=>{
    getVideos()
  },[uploadVideoStatus,deleteVideoStatus])
  console.log(allVideos);
  

  return ( 
    <>
      <Row style={{gap:'30px'}}>
        {
          allVideos?.map((item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </Col> 
          )))
        }
        
      </Row>
    </>
  )
}

export default View