import React from 'react';
import './feed.css';
const Feed = ({author,download_url}) =>{
    return(
        <div className='div-feed'>
            <div className='sub-div'>{author}</div>
            <div className='image-div'>
                <img src={download_url} alt=''/>
            </div>
        </div>
    )
}

export default Feed;