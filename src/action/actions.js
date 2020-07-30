// import axios from 'axios';

// export const fetchPosts = () => {
//     return axios
//     .get('https://expat-journal-web31.herokuapp.com/api/posts/all')
//     .then(response => {
//         console.log(response)
//         return response
//     })
//     .catch(error => {
//         console.log("Beep Boop, no data", error)
//         return error
//     })
// }

// import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_POSTDATA_START = "FETCH_POSTDATA_START";
export const FETCH_POSTDATA_SUCCESS = "FETCH_POSTDATA_SUCCESS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => {
    return dispatch => {
        dispatch({ type: FETCH_POSTDATA_START});
        axiosWithAuth()
        .get(`https://expat-journal-web31.herokuapp.com/api/posts/allposts`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_POSTDATA_SUCCESS, payload: res.data});
        })

        .catch(err => console.log(err))
    }

}

export const addPost = post => {
    return dispatch => {
        axiosWithAuth()
        .post(`https://expat-journal-web31.herokuapp.com/api/posts`, post)
        .then(res => {
            console.log(res)
            dispatch({type: ADD_POST, payload: res.data})
        })
    }
}

export const editPost = post => dispatch => {
    console.log("Updating")
    console.log(post)
        console.log("dispatching")
        axiosWithAuth()
        .put(`https://expat-journal-web31.herokuapp.com/api/posts/${post.id}`, post)
        .then(res => {
            axiosWithAuth()
            .get('https://expat-journal-web31.herokuapp.com/api/posts/allposts/')
            .then(res => dispatch({type: EDIT_POST, payload: res.data}))
        })
        .catch(error => console.log(error))
}

export const deletePost = post => {
    return dispatch => {
        axiosWithAuth()
        .delete(`https://expat-journal-web31.herokuapp.com/api/posts/${post.id}`, post)
        .then(res => {
            console.log(res)
            dispatch({type: ADD_POST, payload: res.data})
        })
        .catch(error => console.log(error))
    }
}
