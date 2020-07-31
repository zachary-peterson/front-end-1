import React, { useState, useEffect } from 'react'
import { useLocation, useParams, useHistory } from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth';
import { editPost } from '../../action/actions'
import { connect } from 'react-redux'



const initialValue = {
    img_url:"",
    title:"",
    description:"",
    location:"",
   
}

const UpdatePost = props => {
    const [post, setPost] = useState(initialValue)
    console.log(props)
    const params = useParams();
    const { push } = useHistory();
    const { location } = useLocation()
    
    useEffect(() => {
            axiosWithAuth()
            .get(`https://expat-journal-web31.herokuapp.com/api/posts/${params.id}`)
            .then(res => {
                console.log("THIS IS IT", res.data[0])
                setPost(res.data[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [location, params]);

  const handleChange = evt =>{
      evt.persist();
      let value = evt.target.value 
        setPost({
            ...post,
            [evt.target.name]: value
        })
    }

    const handleSubmit = evt => {
        console.log(post)
        evt.preventDefault();
        props.editPost(post)
        push('/dashboard')
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
                        value={post.img_url}
                        onChange={handleChange}
                    />
                    <label>title: &nbsp; </label>
                    <input 
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                    />
                    <label>description: &nbsp; </label>
                    <input 
                        type="text"
                        name="description"
                        value={post.description}
                        onChange={handleChange}
                    />
                    <label>Location: &nbsp; </label>
                    <input 
                        type="text"
                        name="location"
                        value={post.location}
                        onChange={handleChange}
                    />
                    <button className="btn">Update</button>
                </form>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        loading: state.loading,
        user: state.user,  
        error: state.error,
    } 
  
  }

export default connect(
    mapStateToProps,
    { editPost }
  )(UpdatePost);
  