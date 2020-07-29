import React, { useEffect } from 'react';
import './UserCard.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


const UserCard = props => {

    return (
        <div>
            <div>
                <Card>
                    <CardImg src={props.posts.img_url} />
                    <CardTitle>{props.posts.username}</CardTitle>
                    <CardTitle>{props.posts.title}</CardTitle>
                    <CardText>{props.posts.desciption}</CardText>
                    <CardSubtitle>{props.posts.location}</CardSubtitle>
                </Card>
            </div>
        </div>
    )
}

export default UserCard;
