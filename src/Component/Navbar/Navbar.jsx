import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItem';
import './Navbar.css';
import SignUp from '../SignUp/SignUp.jsx';

class Navbar extends Component{
  state = {clicked:false};

  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }
  render(){
    return(
      <nav className='navbar-item'>
        <h1 className='navbar-logo'> Trekster </h1>

        <div className='menu-icons' onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) =>{
            return(
            <li key={index}> 
            <Link to={item.url} className={item.cName}>
             <i className={item.icon}></i> {item.title}</Link>
          </li>
          )})}

         <Link to="/signup" className="signup-btn">
              <button>Sign up</button>
            </Link>
        
        </ul>
      </nav>
    )
  }
}

export default Navbar
