import React,{ useEffect, useState } from 'react';
import UserCard from './components/Dashboard/UserCard'
import AddPost from './components/Dashboard/addPost'


const Dashboard = () => {
    
    return (
        <div>
            <AddPost />
            {/* {data.map(post => (
                <UserCard post={post}/>
            ))} */}
        </div>
    )
}

export default Dashboard;

