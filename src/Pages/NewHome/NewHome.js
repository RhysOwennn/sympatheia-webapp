import React from 'react';
import Feeds from '../../Components/Feeds/Feeds';
import Suggestions from '../../Components/Suggestions/Suggestion';
import './newhome.css';

import video from './video12.mp4'

const NewHome = () => {
    return (
        <div>
            <video className='video-style' autoPlay loop >
                <source src={video} type="video/mp4" />
            </video>
            <div className='div-newhome'>
                <Feeds />
                <Suggestions />
            </div>
        </div>
    )
}

export default NewHome;