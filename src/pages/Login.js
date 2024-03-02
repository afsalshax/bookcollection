import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../services/allapi';

function Login() {

  const navigate = useNavigate()

  const [user, setuser] = useState({
      email: "", password: ""
  })

  const setInputs = (e) => {
      const { name, value } = e.target
      setuser({ ...user, [name]: value })

  }

  const handlelogin = async (e) => {
    e.preventDefault()

    const { email, password } = user
    if (!email || !password) {
        alert("please fill all data")
    }
    else {

        const result = await loginApi(user)
        if (result.status === 200) {

          alert("loging your profile  ")
          navigate('/user')

        }
        else {
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
        <Card.Title>User Login</Card.Title>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control onChange={(e) => setInputs(e)} name="email" type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control onChange={(e) => setInputs(e)} name="password" type="password" placeholder="Password" />
      </FloatingLabel>

        <Button className='mt-2' onClick={(e) => handlelogin(e)} variant="primary">SignIn</Button>
        <p>create account <a href="/register">SignUp</a></p>
      </Card.Body>
    </Card>
        </div>
        </Container>
    </div>
  )
}

export default Login