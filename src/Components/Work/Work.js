import React, { Component } from 'react'
import Menu from '../Menu/Menu';
import Footer from '../../Components/Footer/Footer';

export default class Products extends Component {
  render() {
    return (
     <body>
        <Menu />
        <main id="work">
          <h1 class="lg-heading">
          Mis
            <span class="text-secondary"> Proyectos</span>
          </h1>
          <h2 class="sm-heading">
          Puedes checar  mis proyectos ...
          </h2>
          <div class="projects">
            <div class="item">
              <a href="#!">
                <img src={require('../../assets/img/projects/cotizador.PNG')} alt="Project" />
              </a>
              <a href="https://cotizador-fa6c3.firebaseapp.com/" target="_blank" class="btn-light">
                <i class="fas fa-eye"></i> Proyecto de Cotizar Auto
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
              <a href="#!">
               <img src={require('../../assets/img/projects/project2.jpg')} alt="Project" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
              <a href="#!">
              <img src={require('../../assets/img/projects/project3.jpg')} alt="Project" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
              <a href="#!">
              <img src={require('../../assets/img/projects/project4.jpg')} alt="Project" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
              <a href="#!">
              <img src={require('../../assets/img/projects/project5.jpg')} alt="Project" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
          </div>
        </main>
         <Footer />
     </body>
    )
  }
}
