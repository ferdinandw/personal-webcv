import React, { useEffect, useState } from 'react'
import Item from './item';
import axios from 'axios';
import './article.css'
const Article = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get(`http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination`)
            .then(resp => {
                setData(resp.data)
            })
    
    },[])
        

    
    return (
            <div className="album">
                    <div className="container">
                        <div className="row">{
                            data.map((item,index)=>{
                            const {destinationName, address, city} = item;
                            console.log(item);
                            
                            return (
                                <Item key={index} data={item}/> 
                            )
                        })}
                    </div>
                </div>
            </div>
    )

}

export default Article;
