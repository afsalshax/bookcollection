import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {

  
  return (
    <div>
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Book collection
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link  href='/login'>Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header