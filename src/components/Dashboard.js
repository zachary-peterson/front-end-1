import React,{ useEffect, useState } from 'react';
import fetchPosts from '../action/fetchPosts';
import axiosWithAuth from '../utils/axiosWithAuth';
import UserCard from './UserCard'


const Dashboard = () => {
    
    return (
        <div>
            <UserCard />
        </div>
    )
}

export default Dashboard;

