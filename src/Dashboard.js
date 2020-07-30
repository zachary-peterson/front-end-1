import React,{ useEffect, useState } from 'react';
import fetchPosts from "./action/fetchPosts"
import axiosWithAuth from "./utils/axiosWithAuth";
import UserCard from './components/Dashboard/UserCard'
import AddPost from './components/Dashboard/addPost'
import { Switch, Route, useHistory, NavLink, Link} from 'react-router-dom'

const Dashboard = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axiosWithAuth()
        .get('https://expat-journal-web31.herokuapp.com/api/posts')
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => console.log(error))
    }, [])
    return (
       
        <div> 
            <NavLink to="/addpost">Post</NavLink> 
            <Route  path="/addpost">
               <AddPost /> 
            </Route>
                <UserCard />
{/*             
            {data.map(post => (
                <UserCard />
            ))} */}
        </div>
    )
}

export default Dashboard;

