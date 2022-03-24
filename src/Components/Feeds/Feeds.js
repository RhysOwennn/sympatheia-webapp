import React from 'react';
import Feed from '../Feed/Feed';
import './feeds.css';

class Feeds extends React.Component{
    state={
        feeds:null
    }

    async componentDidMount(){
        const resp = await fetch('https://picsum.photos/v2/list')
        const feeds = await resp.json()
        this.setState({feeds})
    }

    render(){
        const {feeds} = this.state
        return(
            <div className='feed-show'>
                {
                    feeds &&
                    feeds.map(({...f}) =><Feed key={f.id} {...f}/>)
                }
            </div>
        )
    }
}

export default Feeds;
