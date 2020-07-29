import React, { useEffect,useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import './UserCard.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


const UserCard = props => {
    const [data, setData] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('https://expat-journal-web31.herokuapp.com/api/posts/allposts')
        .then(response => {
            console.log(response)
            setData(response.data)
        })
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <div>
            {data.map(item => (
                <div className='mainContainer' key={item.key}>
                <img src={item.img_url} />
                <h3>{item.username}</h3>
                <h4>{item.title}</h4>
                <p>{item.desciption}</p>
                <h4>{item.location}</h4>
                </div>
            ))}
            </div>
        </div>
    )
}

export default UserCard;
