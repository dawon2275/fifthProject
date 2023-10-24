import React from 'react';
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <Navbar expand="lg" variant='dark' bg='dark'>
            <Container fluid>
                <Link to="/">
                    <img width={140}  src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd05ded51-54bf-4174-8b7e-e021c6eb6b5a%2FWATCHA_LOGO.svg&blockId=400d70c6-5698-4877-9ddf-83be123fb341" alt="logo" />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='nav-area'>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '120px' }}
                    navbarScroll
                >
                    <Link to='/' className='nav-item'>Home</Link>
                    <Link to='/movies' className='nav-item'>login</Link>
                    
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="검색"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-danger">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation