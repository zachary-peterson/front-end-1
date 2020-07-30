import React, { useState, useEffect } from 'react'
import { useLocation, useParams, useHistory } from 'react-router-dom'
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';


const initialValue = {
    img_url:"",
    title:"",
    description:"",
    location:"",
   
}

const UpdatePost = props => {
    const [update, setUpdate] = useState(initialValue)
    console.log(props)
    const params = useParams();
    const { push } = useHistory();
    
    useEffect(() => {
            axiosWithAuth()
            .get(`https://expat-journal-web31.herokuapp.com/api/posts/${params.id}`)
            .then(res => {
                console.log(res.data)
                setUpdate(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        
    }, []);

  const handleChange = evt =>{
      evt.persist();
      let value = evt.target.value 
        setUpdate({
            ...update,
            [evt.target.name]: value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        axiosWithAuth()
            .put(`https://expat-journal-web31.herokuapp.com/api/posts/${update.id}`, update)
            .then(res => {
                
                setUpdate(res.data)
                console.log(res.data)
                push(`/dashboard`);
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div className="update-movie-list">
            <div className="head-text">
               <h3>Update Post</h3> 
            </div>
            <div className="update-form">
                <form onSubmit={handleSubmit}>
                    <label>img_url: &nbsp; </label>
                    <input 
                        type="text"
                        name="img_url"
                        value={update.img_url}
                        onChange={handleChange}
                    />
                    <label>title: &nbsp; </label>
                    <input 
                        type="text"
                        name="title"
                        value={update.title}
                        onChange={handleChange}
                    />
                    <label>description: &nbsp; </label>
                    <input 
                        type="text"
                        name="description"
                        value={update.description}
                        onChange={handleChange}
                    />
                    <label>Location: &nbsp; </label>
                    <input 
                        type="text"
                        name="location"
                        value={update.location}
                        onChange={handleChange}
                    />
                    <button className="btn">Update</button>
                </form>
            </div>
        </div>
    )
}
export default UpdatePost;