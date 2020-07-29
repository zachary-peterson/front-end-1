import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios'
import { fetchData } from '../../action/action'
import { connect } from 'react-redux';

const AddComment = (props) => {

    // const [comment, setComment] =useState([]);

    // const newCommentSubmit = e => {
    //     e.preventDefault()
    //     axiosWithAuth()
    //     .post(`https://expat-journal-web31.herokuapp.com/api/posts/:id/comments`, formValues)
    //     .then(res => {
    //         setComment(res.data)
    //         console.log(res.data)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })

    // }

    // const onInputChange = e => {
    //     const { name, value } = e.target
    //      setComment({
    //          ...comment,
    //          [name]: value
    //      })
    //     }

    return(
            <form id="addComment">
                <input 
                    // onChange={onInputChange}
                    placeholder={`Post a comment as ${props.username}...`}
                    type='text'
                    value=''
                />

                {/* <button onClick={newCommentSubmit} >Submit</button> */}
            </form>
    );
};

export default AddComment;