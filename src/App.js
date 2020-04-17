import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Content/header'

function App() {
  return (
    <Router>
      <Container fluid className="pad0">
      <Navbar/>
      <Header/>
      </Container>
     
    </Router>
      
  );
}

export default App;
