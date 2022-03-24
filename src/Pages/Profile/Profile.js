import React from 'react';
import {ReactComponent as User} from '../../assets/user.svg';
import './profile.css';

const Profile = ({location:{state:{username,email,name}}}) =>{
    return(
        <div className='parent-div'>
            <div className='parent-sub'>
                <User className='sub-sub'/>
            </div>
            <div className='details-parent'>
                <div className='username-class'>{username}</div>
                <div className='name-class'>{name}</div>
                <div>{email}</div>
            </div>
        </div>
    )
}

export default Profile;