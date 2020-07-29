import React from 'react'

function addPost() {

    return(
        <div>
<form id="addPost">
    <h1> Add Post </h1>
    <label htmlFor="postTitle">Title</label>
    <input 
    name="postTitle"
    type="text"
    value=""
    onChange=""
     />
     

</form>

        </div>
    )

}

export default addPost;