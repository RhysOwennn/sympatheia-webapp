import React from 'react';
import { withRouter} from 'react-router-dom';
import './user.css';


const User = ({name,username,email,history}) =>{
    const handleClick = () =>{
        history.push(`/${username}`,{
            name,
            email,
            username
        })
    }
    return(
        <div className='parent-class'>
            <div className='sub-class-1' onClick={handleClick}>{username}</div>
            <div className='sub-class-2'>{name}</div>
        </div>
    )
}

export default  withRouter(User);