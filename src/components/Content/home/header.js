import React, { Component } from 'react'
import './header.css'
import foto from '../img/pp.jpeg'
import icon1 from '../img/css.png'
import { Container, Jumbotron, Col, Row} from 'react-bootstrap'
export default class Header1 extends Component {
    render() {
        return (
    <div>     
        <div className="bg1">
            <div className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Ferdinand William</h1>
                    <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>
                        <a href="https://github.com/ferdinandw" target="_blank"
                            className="btn btn-secondary">GitHub</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="container-fluid">

       
            <div class="row my-5 mx-3">
                <div class="col-lg-8 col-md-8">
                    <h2 class="pb-3 text-center">Ferdinand William</h2>
                    <p className="justify-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                
                    </p>
                </div>
                <div class="col-lg-4 col-md-4">
                    <img src={foto}/>
                </div>
            </div>
        </div>
        <div>
            <Jumbotron fluid className="bg2">
                <Container>
                <Row className="icon">
                    <Col><img src={icon1}/></Col>
                    <Col><img src={icon1}/></Col>
                    <Col><img src={icon1}/></Col>
                    </Row>
                </Container>
                    
            </Jumbotron>
        </div>
    </div>
        )
    }
}
