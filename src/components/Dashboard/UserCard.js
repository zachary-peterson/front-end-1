import React, { useEffect,useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import styled from 'styled-components';


const UserCard = () => {
    const [data, setData] = useState([])

    const PostDiv = styled.div`
    color: whitesmoke;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 75%;
    text-align: center;
    margin-left: 12%;
    margin-top: 5%;
    /* border: dashed whitesmoke 2px; */
    `

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
                {data.map(item => (
                    <PostDiv>
                    <div key={item.key}>
                    <img src={item.img_url}alt='Expats Experience' />
                    <h4>{item.title}</h4>
                    <h5>User: {item.username}</h5>
                    <h6>{item.desciption}</h6>
                    <h6>Location: {item.location}</h6>
                    </div>
                </PostDiv>
                ))}
            </div>
    )
}

export default UserCard;
