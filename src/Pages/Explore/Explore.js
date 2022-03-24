
import React from 'react';
import './explore.css';

import video from './video8.mp4'


class Explore extends React.Component {
    render() {
        return (
            <div>
                <video className='video-style' autoPlay loop >
                    <source src={video} type="video/mp4" />
                </video>
                <h1 className='explore'>Welcom to Sympatheia!</h1>
                <h2 className='exploreh2'>What is Sympatheia?</h2>
                <p className='explorep'>Sympatheia is an experimental website investigating text tone using sentiment analysis. On your homepage you will find a feed articles each
                    with a general sentiment rating. Each article recieves a rating of polarity and subjectivity. If an article is particularly opinionated it will recieve a higher subjectivity rating
                    and if an article is particularly optimistic it will recieve a high polarity rating and visa versa.
                </p>
            </div>
        )
    }
}

export default Explore;