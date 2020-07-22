import React, { Component } from 'react'
import '../App.css';
import Notiflix from 'notiflix';

export default class item extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             itemName: props.itemName,
             status: props.itemStatus,
             index: props.itemIndex,

        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            status:!this.state.status
          })        
          
          this.props.changeStatus(!this.state.status, this.state.index, this.state.itemName)
      }


    
    render() {
        return (
            <div>
      <button className={this.state.status ? "btnItemTrue": "btnItemFalse"} onClick={this.handleClick}>{this.state.itemName}</button>  
            </div>
        )
    }
}
