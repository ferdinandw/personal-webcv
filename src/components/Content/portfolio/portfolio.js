import React, { Component } from 'react'
import foto from '../img/html5.png'
import './portfolio.css'
export default class Portfolio extends Component {
    render() {
        return (
            <div className="container-fluid port">
                <div className="jumbotron jumbotron-fluid bg1port">
                    <div className="row">
                        <div className="col-lg-8">
                            <p className="mt-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-end pt-3 pb-3">
                            <img src={foto}/>
                        </div>
                    </div>
                </div>
                <div className="jumbotron jumbotron-fluid bg2port">
                    <div className="row">
                    <div className="col-lg-4 d-flex justify-content-end pt-3 pb-3">
                            <img src={foto}/>
                        </div>
                        <div className="col-lg-8">
                            <p className="mt-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="jumbotron jumbotron-fluid bg3port">
                    <div className="row">
                        <div className="col-lg-8">
                            <p className="mt-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-end pt-3 pb-3">
                            <img src={foto}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
