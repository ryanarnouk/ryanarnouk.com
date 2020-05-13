import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../styles/layout.css';

const NavMenu = () => (
    <Navbar bg="dark" expand="lg" className="fixed-top navbar-dark">
        <Navbar.Brand href="#home">Ryan Arnouk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-center">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/reading">Reading</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavMenu; 