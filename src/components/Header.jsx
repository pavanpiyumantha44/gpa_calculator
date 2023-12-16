import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#306991' }}>
      <NavLink className="navbar-brand mx-5" to="gpa_calculator/">
        <img src={logo} width={50} style={{ backgroundColor: 'white' }} alt="Logo" />
        <span style={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '25px', color: 'white' }}>HNDIT GPA Calculator</span>
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link text-light fw-bold" activeClassName="active" exact to="gpa_calculator/sem1">Sem I</NavLink>
          <NavLink className="nav-item nav-link text-light fw-bold" activeClassName="active" exact to="gpa_calculator/sem2">Sem II</NavLink>
          <NavLink className="nav-item nav-link text-light fw-bold" activeClassName="active" exact to="gpa_calculator/sem3">Sem III</NavLink>
          <NavLink className="nav-item nav-link text-light fw-bold" activeClassName="active" exact to="gpa_calculator/sem4">Sem IV</NavLink>
          <NavLink className="nav-item nav-link text-light fw-bold" activeClassName="active" exact to="gpa_calculator/overall">Overall GPA</NavLink>
        </div>
      </div>
      <style>
        {`
          .nav-link.active {
            text-decoration: underline 2px;
            text-decoration-color: white; /* Set the underline color to white */
          }
        `}
      </style>
    </nav>
  );
};

export default Header;


