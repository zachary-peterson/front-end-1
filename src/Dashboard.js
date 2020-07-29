import React,{ useEffect, useState } from 'react';
import fetchPosts from "./action/fetchPosts"
import axiosWithAuth from "./utils/axiosWithAuth";
import UserCard from './components/Dashboard/UserCard'
import AddPost from './components/Dashboard/addPost'

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axiosWithAuth()
        .get('https://expat-journal-web31.herokuapp.com/api/posts/all')
        .then(response => {
            console.log(response)
            setData(response.data)
        })
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <AddPost />
            {data.map(post => (
                <UserCard post={post}/>
            ))}
        </div>
    )
}

export default Dashboard;

