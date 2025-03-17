import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <>
    {/* first section */}
     <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly'>
        <Row>
          <Col>
              <h3 className='textstyle mb-3' style={{fontWeight:'700',fontSize:'35px'}}>Welcome To <span className='text-warning'>MEDIA PLAYER</span></h3>
              <p className='textstyle mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam soluta natus minima incidunt aut cum dignissimos eligendi eos consequatur debitis expedita eum, culpa a repellat quidem architecto porro, omnis sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit debitis accusantium, facilis accusamus dignissimos hic. Nulla, autem et consequatur magnam non repellendus soluta amet voluptas, obcaecati sunt modi voluptatem itaque?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, ipsum ullam molestiae deserunt harum, sit quidem rem voluptas veritatis voluptate consectetur accusantium quos ea aliquid obcaecati asperiores illum qui sed.</p>
              <Link to={'/home'}> 
                <button className='btn btn-warning mt-3'>GET STARTED <i className="fa-solid fa-arrow-right ms-1"></i></button>
              </Link>
          </Col>

          <Col>
              <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" width={'400px'} className='ms-5' />
          </Col>
        </Row>
     </Container>

     {/* second section features */}
     <div className="container">
        <h3 className='textstyle'>FEATURES</h3>
        <div className='d-flex align-items-center justify-content-evenly mt-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>ADD VIDEOS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>
                <Button variant="primary">ADD VIDEO</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>VIEW VIDEOS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>
                <Button variant="primary">VIEW VIDEO</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>WATCH HISTORY</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/watch'}>
                <Button variant="primary">VIEW HISTORY</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
     </div>

     {/* third section */}
     <div className="container mt-5 mb-5 border border-secondary border-2 rounded-4 p-5">
        <Row>
          <Col>
            <h3 className='textstyle'>SIMPLE AND POWERFUL</h3>
            <p className='textstyle'><span className='fs-5 fw-bolder'>PLAY EVERITHING:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut neque recusandae officiis deleniti nobis necessitatibus autem, labore tempora ut accusantium enim minus repellat quos consequuntur, harum quibusdam vero odio!</p>

            <p className='textstyle'><span className='fs-5 fw-bolder'>PLAY EVERITHING:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut neque recusandae officiis deleniti nobis necessitatibus autem, labore tempora ut accusantium enim minus repellat quos consequuntur, harum quibusdam vero odio!</p>

            <p className='textstyle'><span className='fs-5 fw-bolder'>PLAY EVERITHING:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut neque recusandae officiis deleniti nobis necessitatibus autem, labore tempora ut accusantium enim minus repellat quos consequuntur, harum quibusdam vero odio!</p>
          </Col>

          <Col>
            <div>
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/rhrD7as3KJg" title="Neeraj Madhav - BALLAATHA JAATHI [Official Video] ft. Dabzee | Baby Jean | ​⁠Rzee" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
     </div>
    </>
  )
}

export default LandingPage