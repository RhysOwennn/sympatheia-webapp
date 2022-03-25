import React, { Component } from 'react'
import axios from 'axios'
import './writeup.css'
// import { Form } from 'react-bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css"
import video from './video10.mp4'

class Writeup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            analysis: {},
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your text was analyzed ' + this.state.value);
        event.preventDefault();

        axios.post("https://sympatheiaserver.herokuapp.com/writeup", this.state, {
            headers: {
                "content-type": "application/json"
            }
        }).then(response => {
            this.setState({
                analysis: response.data
            })
            console.log(response.data)
            console.log(response.headers)
            console.log(response.data.ID)
        })
    }

    // componentDidMount() {
    //     axios.get("http://127.0.0.1:5000/writeup").then(response => {
    //         this.setState({
    //             analysis: response.data
    //         })
    //         console.log(response.data)
    //         console.log(response.headers)
    //         console.log(response.data.ID)


    //     })
    // }


    render() {
        const { analysis } = this.state
        return (
            <div>
                <video className='video-style' autoPlay loop >
                    <source src={video} type="video/mp4" />
                </video>
                <div className='div-writeup'><form className='formtest' onSubmit={this.handleSubmit}>
                    <label className='formtest'>
                        <input className='formtest' placeholder='Enter your sentence here..' type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input className='button' type="submit" value="Submit" />
                </form ><h1 className='exploreh2'>We measured your sentence, here's what we found: </h1><div>
                        <div className='editp'>
                            <h1>Analysis response: {analysis.Message}</h1>
                            <h1>Polarity: {analysis.polarity}</h1>
                            <h1>Subjectivity: {analysis.subjectivity}</h1>
                            <h1>Subjectivity score: {analysis.sub}</h1>
                            <h1>Polarity score: {analysis.pol}</h1>
                        </div>
                    </div></div>
            </div>
        )
    }

}


export default Writeup;







