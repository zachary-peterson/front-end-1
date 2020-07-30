import React, { useState } from "react";
import "./addPost.css";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  img_url: "",
  title: "",
  description: "",
  location: "",
};

function AddPost() {
  const { push } = useHistory();
  const [post, setPost] = useState(initialFormValues);
  // add the new state to get the newPost
  const [newPost, setNewPost] = useState([]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const addPostSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://expat-journal-web31.herokuapp.com/api/posts`, post)
      .then((res) => {
        setNewPost(res.data);
        console.log(res.data);
        push("/dashboard");
        window.location.reload()
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="addPost-Wrap">
      <div>
        <form>
          <h1> Add Post </h1>
          <label htmlFor="title">Title </label>
          <br />
          <input
            name="title"
            type="text"
            value={post.title}
            onChange={onInputChange}
          />
          <br />
          <label htmlFor="location">Location </label>
          <br />
          <input
            name="location"
            type="text"
            id="postBody"
            onChange={onInputChange}
          />
          <br />
          <label htmlFor="img_url">Select an Image</label>
          <br />
          <input
            type="text"
            name="img_url"
            value={post.img_url} // add value to the form
            onChange={onInputChange}
          />
          <br />
          <label htmlFor="description">Post </label>
          <br />
          <textarea
            name="description"
            value={post.description}
            onChange={onInputChange} // add the handlechange to the form as well // Khwanchai
          />
          <br />
          <button onClick={addPostSubmit}>Submit</button>
        </form>
        <br></br>
      </div>
    </div>
  );
}

export default AddPost;
