import React from 'react';
import './UserCard.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const UserCard = () => {
    return (
        <div>
            <div>
                <Card>
                    <CardImg src='https://source.unsplash.com/random/300x300' />
                    <CardTitle>Title</CardTitle>
                    <CardText>This is text about my trip</CardText>
                    <CardSubtitle>Location.USA</CardSubtitle>
                </Card>
            </div>
        </div>
    )
}

export default UserCard;