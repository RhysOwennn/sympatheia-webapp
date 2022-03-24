import React from 'react';
import './404Page.css';
import video from './404video.mp4'


const NoMatch = ({ history }) => {
    return (
        <div>
            <video className='video-style' autoPlay loop >
                <source src={video} type="video/mp4" />
            </video>
            <div className='div-style'>
                <h2>404Page</h2>
                <p>Redirecting to <span className='paragraph-style' onClick={() => history.push('/')}>Login Page</span></p>
            </div>
        </div>

    )
}

export default NoMatch;