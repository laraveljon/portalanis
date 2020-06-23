import React, { Component } from 'react'
import Menu from '../Menu/Menu';
import Footer from '../../Components/Footer/Footer';
export default class Contacto extends Component {
  render() {
    return (
     <body>
        <Menu />
        <main id="contact">
          <h1 class="lg-heading">
            Me puedes
            <span class="text-secondary"> contactar</span>
          </h1>
          <h2 class="sm-heading">
            Me pueden contactar con los siguientes contactos
          </h2>
          <div class="boxes">
            <div>
              <span class="text-secondary">correo electronico: </span> jonathan_alanis@outlook.com
            </div>
            <div>
              <span class="text-secondary">segundo correo electronico: </span> jar_alanis@outlook.com
            </div>
            <div>
              <span class="text-secondary">Phone: </span> (55) 26-55-3661
            </div>
            <div>
              <span class="text-secondary">Direccion: </span> México , Estado de Mexico, Ecatepec San Cristobal Centro , 55000
            </div>
          </div>
        </main>

        <Footer />
    </body>
    )
  }
}
