import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import { Navbar, Nav } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: '#306991' }}>
      <Navbar.Brand href="/gpa_calculator">
        <img src={logo} width={50} style={{ backgroundColor: 'white',marginLeft:'20px' }} alt="Logo" />
        <span style={{ marginLeft: '40px', fontWeight: 'bold', fontSize: '25px', color: 'white' }}>HNDIT GPA Calculator</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link text-light fw-bold" activeClassName="active" exact to="/gpa_calculator/sem1">Sem I</NavLink>
          <NavLink className="nav-link text-light fw-bold" activeClassName="active" exact to="/gpa_calculator/sem2">Sem II</NavLink>
          <NavLink className="nav-link text-light fw-bold" activeClassName="active" exact to="/gpa_calculator/sem3">Sem III</NavLink>
          <NavLink className="nav-link text-light fw-bold" activeClassName="active" exact to="/gpa_calculator/sem4">Sem IV</NavLink>
          <NavLink className="nav-link text-light fw-bold" activeClassName="active" exact to="/gpa_calculator/overall">Overall GPA</NavLink>
        </Nav>
      </Navbar.Collapse>
      <style>
        {`
          .nav-link{
            margin-left:20px;
          }
          .nav-link.active {
            text-decoration: underline 2px;
            text-decoration-color: white; /* Set the underline color to white */
          }
        `}
      </style>
    </Navbar>
  );
};

export default Header;


