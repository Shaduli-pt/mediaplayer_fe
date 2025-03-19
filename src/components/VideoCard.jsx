import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allApi';
import { toast } from 'react-toastify';



function VideoCard({displayVideo,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
      setShow(true)
      const {caption,embededLink} = displayVideo;
      const today = new Date();
      console.log(today);
      const year =today.getFullYear();
      const month = today.getMonth()+1;
      const day = (today.getDay())
      console.log(year,month,day);
      
      const hour = today.getHours();
      const minute = String(today.getMinutes()).padStart(2,0)
      const timeValue = day+'-'+month+'-'+year+' '+hour+':'+minute
      console.log(timeValue);
      
      // const history ={
      //   caption:caption,
      //   embededLink:embededLink,
      //   timeStamp:timeValue
      // }     
      
      const history ={
        caption,
        embededLink,               //ivide key & value same aanenkil onn type akyal mathi.
        timeStamp:timeValue
      }     
      await addToHistory(history)
  };

  console.log("Each video item");
  console.log(displayVideo);

  const removeVideo = async(id)=>{
    const response = await deleteVideo(id)
    console.log("delete response");
    console.log(response);
    
    if (response.status === 200){
      setDeleteVideoStatus(response)
      toast.error(`${displayVideo.category} successfully deleted !!`)
    }
  }

  const dragStarted = (e, id) =>{
    console.log(`video with ${id} started dragging`);
    e.dataTransfer.setData("videoID",id)
  }

  return (
    <>
        <Card style={{ width: '18rem' }} draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}>   {/*ivide dragStarted enn function call aak athileek display.id and event (e) pass cheythu */}
            {/* <Card.Img variant="top" src="https://images.genius.com/426b1145a564cd8eb1a9a2989b53cf02.800x1000x1.jpg" /> */}
            <Card.Img variant="top" src={displayVideo.thumbnailUrl} height={"290px"}
              onClick={handleShow} />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    {/* <Card.Title>DILSHAD</Card.Title> */}
                    <Card.Title>{displayVideo.caption}</Card.Title>
                    <Button variant="danger" onClick={()=>removeVideo(displayVideo.id)}><i class="fa-solid fa-trash"></i></Button>
                </div>
            </Card.Body>
        </Card>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{displayVideo.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe width="100%" height="390" src={displayVideo.embededLink}></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default VideoCard

