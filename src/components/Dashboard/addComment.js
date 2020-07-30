import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios'
import { fetchData } from '../../action/action'
import { connect } from 'react-redux';

const AddComment = (props) => {

    return(
            <form id="addComment">
                <input 
                    onChange=''
                    placeholder={`Post a comment as ${props.username}...`}
                    type='text'
                    value=''
                />

                <button onClick='' >Submit</button>
            </form>
    );
};

export default AddComment;