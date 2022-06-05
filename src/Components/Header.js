//import { Button } from '@mui/material'
import React, { Component } from 'react';
import { Container, Form, Nav, Navbar, FormControl, Button} from 'react-bootstrap';
import logo from './logo192.png';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';
import Blog from '../Pages/Blog';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar  sticky="top" collapseOnSelect expand='md' bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              /> React site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"        
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/contacts' element = {<Contacts/>}/>
            <Route path='/blog' element = {<Blog/>}/>
          </Routes>
        </Router>
      </>
    )
  }
}
