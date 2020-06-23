import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {


    constructor(props){
        super(props)
    
      }
    
    
      componentDidMount(){
    
              // Select DOM Items
              const menuBtn = document.querySelector('.menu-btn');
              const menu = document.querySelector('.menu');
              const menuNav = document.querySelector('.menu-nav');
              const menuBranding = document.querySelector('.menu-branding');
              const navItems = document.querySelectorAll('.nav-item');
    
              // Set Initial State Of Menu
              let showMenu = false;
    
              menuBtn.addEventListener('click', toggleMenu);
    
              function toggleMenu() {
                if (!showMenu) {
                  menuBtn.classList.add('close');
                  menu.classList.add('show');
                  menuNav.classList.add('show');
                  menuBranding.classList.add('show');
                  navItems.forEach(item => item.classList.add('show'));
    
                  // Set Menu State
                  showMenu = true;
                } else {
                  menuBtn.classList.remove('close');
                  menu.classList.remove('show');
                  menuNav.classList.remove('show');
                  menuBranding.classList.remove('show');
                  navItems.forEach(item => item.classList.remove('show'));
    
                  // Set Menu State
                  showMenu = false;
                }
              }
      }

  render() {
    return (
        <header>
        <div className="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait"></div>
          </div>
          <ul className="menu-nav">
            <li className="nav-item current">

              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">

              <Link to="/About" className="nav-link" >Sobre mí </Link>
            </li>
            <li className="nav-item">
           
              <Link to="/Work" className="nav-link" >Mis Proyectos</Link>
            </li>
            <li className="nav-item">

              <Link to="/Contacto" className="nav-link">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
