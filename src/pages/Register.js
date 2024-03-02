import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { registerApi } from '../services/allapi';
import { useNavigate } from 'react-router-dom';

function Register() {

  const [user,setuser]=useState({
   userName:"",email:"",password:""
  })
  const navigate=useNavigate()
  
  const setInputs=(e)=>{
    const {name,value}=e.target
    setuser({...user,[name]:value})

  }




  const handleRegister=async(e)=>{
    e.preventDefault()
    const {userName,email,password}=user
    if(!userName ||!email || !password){
      alert("fill all the data")
    }
    else{

      const result = await registerApi(user)
     if(result.status===200){

      alert("registered successfully")
      navigate('/login')
 
     }
     else{
      alert(result.response.data)
     }
 
    }
    
  }

  return (
    <div>
   <Container>
        <div  style={{marginRight:'300px'}}> 
        <Card style={{ width: '18rem',marginTop:'100px' }}>
      <Card.Body>
        <Card.Title>User Register</Card.Title>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        
      >
        <Form.Control value={user.email} onChange={(e)=>setInputs(e)} name='email' type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="username" label="Username">
        <Form.Control value={user.userName} onChange={(e)=>setInputs(e)} name='userName' type="text" placeholder="Username" />
      </FloatingLabel>

      
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control value={user.password} onChange={(e)=>setInputs(e)} name='password' className='mt-2' type="password" placeholder="Password" />
      </FloatingLabel>

        <Button onClick={(e)=>handleRegister(e)} className='mt-2' variant="primary">SignUp</Button>
        <p>LogIn<a href="/login">SignUp</a></p>
      </Card.Body>
    </Card>
        </div>
        </Container>

    </div>
  )
}

export default Register