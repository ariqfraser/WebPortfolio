
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Index from './pages'

//import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
//import niceColors from 'nice-color-palettes';

function App() {

  return (

    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
          <Route path="/" component={Index} exact/>
      </Switch>
    </Router>
    
  );
}

export default App;
