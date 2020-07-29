import React, { useState, useEffect } from 'react';

const addComment = (props) => {

    return(
        <div>

            <form id="addComment">
                <input 
                    onChange=''
                    placeholder={`Post a comment as ${data.username}...`}
                    type='text'
                    value=''
                />
            </form>

        </div>
    )
}

export default addComment;