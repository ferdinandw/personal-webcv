import React, { useEffect, useState } from 'react';
import {useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ReadMore = () => {
    const { id } = useParams();
    let [data, setData] = useState({
        images: '',
        destinationName: '',
        address: '',
        city: '',
        province: '',
        description: ''
    });
    useEffect(() =>{
        axios.get(`http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination/${id}`)
            .then(resp =>{
                // setData(Object.assign({}, data, resp.data))
                setData(resp.data)
            })
    }, [])

    return(
        <div className="container">
            <div className="row my-5 mx-3">
                <div class="col-lg-6 col-md-6">
                    <img src={`http://35.240.201.155:3000/${data.images}`}/>
                </div>
                <div className="col-lg-6 col-md-6">
                    <h3>{data.destinationName}</h3>
                    <p>
                    Address: {data.address}
                    </p>
                    <p>
                    City: {data.city}
                    </p>
                    <p>
                    Province: {data.province}
                    </p>
                    <p>
                    Description: {data.description}
                    </p>
                    <Link className="btn btn-primary" to="/article">Back</Link>
                </div>
            </div>
        </div>
    )

}

export default ReadMore