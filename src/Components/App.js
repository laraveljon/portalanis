import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Work from './Work/Work';
import Contacto from './Contacto/Contacto';

class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={About} />
          <Route path="/Work" component={Work} />
          <Route path="/Contacto" component={Contacto} />
        </Switch>
      </div>
    );
  }
}

export default App;
