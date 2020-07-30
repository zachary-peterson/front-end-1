import React, { useEffect, useState } from 'react';
import './UserCard.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { connect } from 'react-redux'
import {fetchPosts} from '../../action/fetchPosts'
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'
import UpdatePost from './updatePost'


const initialFormValues = {
    img_url:"",
    title:"",
    description:"",
    location:"",   
}
const UserCard = props => {


    const [posts, setPost] =  useState([])
    const [editPost, setEditPost] = useState(initialFormValues)
    const params = useParams()
    const { push } =useHistory()
    console.log(props)

    
const getPost = (id) => {
    axiosWithAuth()
    .get(`https://expat-journal-web31.herokuapp.com/api/posts/${id}`)
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

    const deletePost = () => {
        axiosWithAuth()
        .delete(`https://expat-journal-web31.herokuapp.com/api/posts/${posts.id}`)
        .then(res => {
            setPost(posts.filter(post => post.id !==posts.id))
        })

    }

    return (
        <div>
            <div>

                {
                    props.posts.map(post => (
                        <div>
                            {/* <p>{post.title} </p> */}
                    <Card >
                        <p>{post.id} </p>
                        <CardImg src={post.img_url} />
                        <CardTitle>{post.username}</CardTitle>
                        <CardTitle>{post.title}</CardTitle>
                        <CardText>{post.description}</CardText>
                        <CardSubtitle>{post.location}</CardSubtitle>
                        <button className="update-button" onClick={() => push(`/updatepost/${params.id}`)}>Update Post</button>
                        <button onClick={deletePost}>Delete Post</button>
                </Card>
               
                        </div>
                    ))
                }
                
            </div>
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


