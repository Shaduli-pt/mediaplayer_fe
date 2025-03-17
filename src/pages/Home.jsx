import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function Home() {
  const [uploadVideoStatus, setUploadVideoStatus] = useState([])
  return (
    <>
    {/* first section */}
      <div className="container d-flex aign-items-center justify-content-between mt-5">
        <Add setUploadVideoStatus={setUploadVideoStatus}/>
        <Link style={{textDecoration:'none'}} to={'/watch'}>
          <span className='textstyle fs-5 fw-bold '>WATCH HISTORY <i className='fa-solid fa-clock ms-2'></i></span>
        </Link>
      </div>
      
      {/* second section */}
      <div className="container-fluid mt-5 mb-5 w-100">
        <div className="row">
          <div className="col-md-9 textstyle">
            <View uploadVideoStatus={uploadVideoStatus}/>
          </div>
          <div className="col-md-3 textstyle">
            <Category/>
          </div>
        </div>
      </div>

      <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>

  )
}

export default Home