import React, { Component } from 'react'
import Lottie from 'react-lottie';
import { Dropdown, Input, Button, Icon, Confirm, Popup  } from 'semantic-ui-react';

import animationTrue from '../img/good.json';
import animationFalse from '../img/failed.json';
import '../App.css';
import {Link} from 'react-router-dom';





const optionsTrue = {
  loop: true,
  autoplay: true,
  animationData: animationTrue,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'

  }
};

const optionsFalse = {
  loop: true,
  autoplay: true,
  animationData: animationFalse,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'

  }
};



export default class RegistrationMessage extends Component {


constructor(props) {
  super(props)

  this.state = {
    type: props.type,
    name: props.name,
    color: props.color,
    check: props.check
  }
}


show = () =>{
if (this.state.check == true) {
  return(
    <div>
    <Link to={'/'}>
    <Lottie options={optionsTrue} width={150} height={150}/>
    </Link>
    <p className='great-message'>Yes! You have successfully<br/>added a new room to the app!</p>
    <div style={{color: this.state.color}}>
    <div className='type-style'>The type is: <strong>{this.state.type}</strong></div>
    <div className='type-style'>The name is: <strong>{this.state.name}</strong></div>
    <div className='type-style' >The colour is: <strong>{this.state.color}</strong></div>
    </div>
    <Link to={'/'}>
    <button className='btn-register-room'>Great, go head...</button>
    </Link>
    </div>
  )
}
else{
  return(
    <div>
    <Link to={'/'}>
    <Lottie options={optionsFalse} width={150} height={150}/>
    </Link>
    <p className='eror-message'>Oops! something went wrong.<br/>Please try registering again!</p>

    <Button.Group>
    <Link to={'/AddRoom'}>
    <Button>Try again</Button>
    </Link>
    <Button.Or />
    <Link to={'/'}>
    <Button positive>Home page</Button>
    </Link>
    </Button.Group>
    </div>
  )
}
}


    render() {

        return (
            <div>
              {this.show()}
            </div>
        )
    }
}
