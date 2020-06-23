import React, { Component } from 'react';
import Menu from '../Menu/Menu';
export default class Header extends Component {

  render() {
    return (
      <div>
        <Menu />

        <main id="home">
          <h1 class="lg-heading">
            Jonathan
            <span class="text-secondary"> Alanis Rojas</span>
          </h1>
          <h2 class="sm-heading">
          Desarrollador web, programador, diseñador y emprendedor
          </h2>
          <div class="icons">
            {/* <a href="" target="_blank">
              <i class="fab fa-twitter fa-2x"></i>
            </a> */}
            <a href="https://www.facebook.com/jonathan.alanis.758?ref=bookmarks" target="_blank">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/jonathan-alanis-77482510b/" target="_blank">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/JonReactJS" target="_blank">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>
        </main> 

        {/* <Footer /> */}

      </div>
    )
  }
}
