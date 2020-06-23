import React, { Component } from 'react'
import Menu from '../Menu/Menu';
import Footer from '../../Components/Footer/Footer';

export default class about extends Component {
  render() {
    return (
      <div>
        <body>
          <Menu />


          <main id="about">
            <h1 className="lg-heading">
              Sobre 
              <span className="text-secondary"> Mí</span>
            </h1>
            <h2 className="sm-heading">
              Que te dire sobre ese tema
            </h2>
            <div className="about-info">
            <img src={require('../../assets/img/avatar/CapturaEdit.jpg')} alt="Alanis" className="bio-image" />
            <div className="bio">
              <h3 className="text-secondary">Que hay de mi...</h3>
              <p>Amante a la vida como tal... a la lectura a la musica y a los videojuegos como al igual en la programación y en las  nuevas tendencias de la tecnología que estan surguien hoy en dia.</p>
            </div>

            <div className="job job-1">
              <h3>Desarrollo de Lenguajes</h3>
              <h6>Full Stack Developer</h6>
              <p>Desarrollando Porgramacion de Full Stack con Lenguajes de Programación de PHP con MVC ya sea con Framework 
                Laravel y Codeignither, MYSQL y SQL server, .Net con C#, Javascript Frameworks con React JS y Angular Js </p>
            </div>

              <div className="job job-2">
                <h3>Front End</h3>
                <h6>Front y Desarrollo</h6>
                <p>Desarrolloutilizando Herremientas de enguajes de Botstrap 3 y 4 tambien utilizando Materialize en Frameworks como
                  React js y Angular 
                </p>
              </div>

              <div className="job job-3">
                <h3>Nuevos Desarrollos y Lenguajes</h3>
                <h6>Tanto en Back end y Front Eend</h6>
                <p>Por mi parte invierto tiempo en aprender nuevas Tecnologias como Vue JS, React JS y Native y Angular 7 
                  Aprendiendo PHP y Go Node Js
                </p>
              </div>
          
            </div>
          </main>
          <Footer />

       </body>
      </div>
    )
  }
}
