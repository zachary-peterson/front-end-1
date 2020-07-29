import React from 'react'

function AddPost() {

    return(
        <div>
<form id="addPost-Wrap">
    <h1> Add Post </h1>
    <label htmlFor="postTitle">Title </label> 
    <br /> 
    <input 
    name="postTitle"
    type="text"
    value=""
    onChange=""
     />
     <br />
 <label htmlFor="location">Location </label> 
    <br /> 
<input 
name="location"
type="text" 
id="postBody"

/>
 <br /> 
    <label htmlFor="post">Post </label> 
    <br />
    <input 
    type='text'
    value=""
    onChange=""
    />
    <br />
<button>Submit</button>
</form>

        </div>
    )

}

export default AddPost;