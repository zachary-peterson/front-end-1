import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Nav() {
    return(
        <div>
            <div className="nav-wrap">
        <Link to ="/">Home</Link>
        <Link to ='/login'>Login</Link>
        <Link to ='/signup'>signup</Link>
</div>

        </div>
    )
}

export default Nav;