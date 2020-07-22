import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';



export default class Rooms extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             type: props.type,
             name: props.name,
             color: props.color,
             index: props.index

        }
    }

    getTheIndex=()=>{
    this.props.indexRoom(this.state.index)}


    render() {
        return (
            <div>
                <Link to={'/room'}>
                <button onClick={this.getTheIndex} style={{backgroundColor: this.state.color}} className='room-name'>{this.state.name}</button> 
                </Link>
            </div>
        )
    }
}
