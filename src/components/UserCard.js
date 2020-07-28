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
                    <CardImg src={props.data.img} />
                    <CardTitle>{props.data.title}</CardTitle>
                    <CardText>{props.data.caption}</CardText>
                    <CardSubtitle>{}</CardSubtitle>
                </Card>
            </div>
        </div>
    )
}

export default UserCard;