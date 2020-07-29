import React , {useState} from 'react'
import './addPost.css'



const initialFormValues = {
    image_url:"",
    title:"",
    description:"",
    location:"",
  
    
}

function AddPost() {
 const[post, setPost] =  useState(initialFormValues)

    return(
        <div  id="addPost-Wrap">
        <div>
<form>
    <h1> Add Post </h1>
    <label htmlFor="title">Title </label> 
    <br /> 
    <input 
    name="title"
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
<label htmlFor="image_url">Select an Image</label>
<br />
<input type="file"
 name='image_url'
value=""
onChange="" /> 
 <br /> 
    <label htmlFor="description">Post </label> 
    <br />
    <textarea
    name="description"
    value=""
    onChange=""
    />
    <br />
<button>Submit</button>
</form>
</div>
        </div>
    )

}

export default AddPost;