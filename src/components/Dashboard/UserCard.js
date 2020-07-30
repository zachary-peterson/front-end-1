import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import {fetchPosts} from '../../action/actions'
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'
import UpdatePost from './updatePost'
import styled from 'styled-components'


const initialFormValues = {
    img_url:"",
    title:"",
    description:"",
    location:"",   
}
const UserCard = props => {

    const PostDiv = styled.div`
    color: whitesmoke;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 75%;
    text-align: center;
    margin-left: 12%;
    margin-top: 5%;
    /* border: dashed whitesmoke 2px; */
    `


    const [posts, setPost] =  useState([])
    const [editPost, setEditPost] = useState(initialFormValues)
    const params = useParams()
    const { push } =useHistory()
    console.log(props)

    
const getPost = () => {
    axiosWithAuth()
    .get(`https://expat-journal-web31.herokuapp.com/api/posts/allposts/`)
    .then(res => {
        console.log(res)
        setPost(res.data)
    })
    .catch(error => {
        console.log("Beep Boop, no data", error)
        return error
    })
}

    useEffect(()=> {
       fetchPosts()
    }, [])

    const deletePost = props => {
        axiosWithAuth()
        .delete(`https://expat-journal-web31.herokuapp.com/api/posts/${props.id}`)
        .then(res => {
            push('/dashboard')
            window.location.reload()
            return res.data
        })

    }

    return (
            <div>

                {
                    props.posts.map(post => (
                        <div>
                            {/* <p>{post.title} </p> */}
                    <PostDiv >
                        <div key={post.key}>
                        <img src={post.img_url} alt ='Expat Journal'/>
                        <h4>{post.title}</h4>
                        <h5>{post.username}</h5>
                        <h6>{post.description}</h6>
                        <h6>{post.location}</h6>
                        <button className="update-button" onClick={() => push(`/updatepost/${post.id}`)}>Update Post</button>
                        <button onClick={() => deletePost(post)}>Delete Post</button>
                        </div>
                </PostDiv>
               
                        </div>
                    ))
                }
                
            </div>
    )
}
const mapStateToProps = state => {
    return {
        loading: state.loading,
        posts: state.posts,  
        error: state.error,
    } 
  
  }
export default connect(
    mapStateToProps,
    { fetchPosts }
)(UserCard);


