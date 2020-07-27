import React from 'react';
import { Jumbotron } from 'reactstrap';

const UserCard = () => {
    return (
        <div>
            <Jumbotron>
                <img src='https://source.unsplash.com/random/300x300' />
                <h2>Title</h2>
            </Jumbotron>
        </div>
    )
}

export default UserCard;