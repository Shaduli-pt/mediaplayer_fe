import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory, deleteVideoCategory, getAllCategories} from '../services/allApi';

function Category() {

    const [show, setShow] = useState(false);
    const [categories,setCategories] = useState([])
    const handleClose = () =>{
      setShow(false);
      setCategoryName("")    //this line done for what? -- nammal oru category add aakiyal ath backendil keerum,after that data add akathe add button click akyal athin munne type cheytha data veruthe veendu keerum,ath ozhivaakan veendi setcategoryName empty aaki koduthu.ippol add button click cheythal plese enter something enn kodutha comment varum
    }
    const handleShow = () => setShow(true);

    const [categoryName,setCategoryName] = useState("")
    const handleAddCategory = async()=>{
        if(!categoryName){
          toast.warning("Plese fill the category name")
        }
        else{
          const body={
            categoryName:categoryName,
            allVideos:[]
          }
          const response = await addCategory(body);
          console.log("category response");
          console.log(response);
          
          if(response.status === 201){
            toast.success(`${categoryName} successfully Saved`)
          }

          handleClose()
        }
    }

    const getCategories = async()=>{
      const response = await getAllCategories()
      console.log("categories");
      console.log(response);
      const {data} = response;
      setCategories(data) 
    }

    useEffect(()=>{
      getCategories()
    },[categoryName])

    const deleteCategory = async(id)=>{
      await deleteVideoCategory(id)     // ee stepil delete aakum.but visible aakan refresh cheyyanam            
      getCategories()                 // so we did thi step now automatically refresh aavum.delete akyal appothanne visible aakum
    }

  return (
    <>
      <div>
        <button className='btn btn-warning' onClick={handleShow}>ADD NEW CATEGORY</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'               //this is method we use additionaly for making the bgc of modal as black
      >
        <Modal.Header closeButton>
          <Modal.Title className='textstyle'><i class="fa-solid fa-list text-warning me-3"></i> ADD CATEGORY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className='textstyle fw-bolder'>PLEASE FILL THE FORM</p>
          <Form className='border border-secondary p-3 rounded-3'>
              <Form.Group className="mb-2 mt-2" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="CATEGORY NAME"
                  onChange={(e)=>setCategoryName(e.target.value)}
                />
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>ADD</Button>
        </Modal.Footer>
      </Modal>

            {
              categories?.map((item)=>(
                <div className='border border-secondary rounded p-3 m-5'>
                    <div className="d-flex justify-content-between align-item-center">
                      <h6>{item.categoryName}</h6>
                      <button className='btn btn-danger' onClick={(e)=>deleteCategory(item.id)}><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
              ))
            }
    </>
  )
}

export default Category