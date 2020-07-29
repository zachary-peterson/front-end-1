import React,{ useEffect, useState } from 'react';
import UserCard from './UserCard';
import fetchPosts from '../action/fetchPosts';

const Dashboard = () => {

    const [posts, setPosts] = useState([])


    return (
        <div>
           <h2>Nothing here yet</h2>
        </div>
    )
}

export default Dashboard;