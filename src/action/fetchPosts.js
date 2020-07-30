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

export const fetchPosts = () => {
    return dispatch => {
        dispatch({ type: FETCH_POSTDATA_START});
        axiosWithAuth()
        .get(`https://expat-journal-web31.herokuapp.com/api/posts`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_POSTDATA_SUCCESS, payload: res.data});
        })

        .catch(err => console.log(err))
    }

}
