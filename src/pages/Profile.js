import React, { useEffect } from 'react'
import Header from '../components/Header'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getbookApi, postApi } from '../services/allapi';

function Profile() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [posts,setposts]=useState() 


  const [post,setpost]=useState({
    bookname:"",author:""
  })

  const setInputs=(e)=>{
    const {name,value}=e.target
     setpost({...post,[name]:value})

  }


  const handlepost=async(e)=>{
    e.preventDefault()
    const {bookname,author}=post
    if(!bookname ||!author){
      alert("fill all the data")
    }
    else{
           
  
      const result = await postApi(post)
     if(result.status===200){

      alert("added successfully")
 
     }
     else{
      alert(result.response.data)
     }
 
    }
    
  }

  useEffect(()=>{
    const getbooks =  async()=>{
  
      const res = await getbookApi()
      setposts(res.data)
      console.log(res.data);
    
  
    }
     getbooks()
  },[])
 



  return (
    <div>
        <Header></Header>
        <h6 className='text-center mt-3'>Profile details</h6>
    
        <h5 className='text-center mt-3'>Name : </h5>
        <h5 className='text-center mt-3'>email : </h5>

    
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Bookname</th>
          <th>Author</th>
          <th><button onClick={handleShow}>Add book</button></th>
        </tr>
      </thead>
      <tbody>
       {  posts?.map((p)=>(  <tr>
          <td>{p.bookname}</td>
          <td>{p.author}</td>
          <td><button>delete</button></td>
        </tr>))}
      </tbody>
    </Table>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add book</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel
        controlId="floatingInput"
        label="bookname"
        className="mb-3"
      >
        <Form.Control value={post.bookname} onChange={(e)=>setInputs(e)} name="bookname" type="text" placeholder="bookname" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPa" label="author">
        <Form.Control value={post.author} onChange={(e)=>setInputs(e)} name="author" type="text" placeholder="author" />
      </FloatingLabel>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>handlepost(e)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Profile