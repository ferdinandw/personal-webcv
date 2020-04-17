import React, { Component } from 'react'

export default class Copyright extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div class="container-fluid">
                        <div class="row text-left">
                            <div class="col-md-4">
                                <h5>My Contact</h5><br/>
                                <p>081378032920</p>
                                <p>fwng123@gmail.com</p>
                                <p>BATAM</p>
                            </div>

                            <div class="col-md-4">
                                <h5>Location</h5><br/>
                                <p>Jln. Gn Daek no.33, Baloi Indah
                                </p>
                                <p>Batam</p>
                                <p>Indonesia</p>
                            </div>

                            <div class="col-md-4">
                                <h5>Social Media</h5><br/>
                                <p>Github</p>
                                <p>Line</p>
                                <p>Instagram</p>
                            </div>
                        </div>
                    </div>
                </footer>
                <div class="row cr">
                    <div class="col-md-12">
                        Copyright Ferdinand William. All rights reserved.
                    </div>
                </div>
            </div>
        )
    }
}
