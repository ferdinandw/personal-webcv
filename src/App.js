import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Content/home/header'
import Article from './components/Content/article/article'
import Portfolio from './components/Content/portfolio/portfolio'
import Hire from './components/Content/hire/hire'
function App() {
  return (
    <Router>
      <Container fluid className="pad0">
      <Navbar/>
      <Switch>
        <Route path = "/portfolio">
          <Portfolio/>
        </Route>
        <Route path ="/article">
          <Article/>
        </Route>
        <Route path ="/hire">
          <Hire/>
        </Route>
        <Route path ="" exact>
        <Header/>
        </Route>
      </Switch>
      </Container>
    </Router>
      
  );
}

export default App;
