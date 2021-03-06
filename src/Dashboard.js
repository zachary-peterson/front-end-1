import React,{ useState, useEffect } from 'react';
import UserCard from './components/Dashboard/UserCard'
import AddPost from './components/Dashboard/addPost'
import { Switch, Route, useHistory, NavLink, Link} from 'react-router-dom'
import axiosWithAuth from './utils/axiosWithAuth'

const Dashboard = (props) => {
    const [data, setData] = useState([])
    const { push } = useHistory()
    useEffect(() => {
        axiosWithAuth()
        .get('https://expat-journal-web31.herokuapp.com/api/posts')
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    const onSubmit = () => {
        push('/addpost')
    }
    return (
       
        <div> 
            <button onClick={onSubmit}>AddPost</button> 
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

