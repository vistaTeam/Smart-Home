import React, { Component } from 'react'
import { Dropdown, Input, Button, Icon, Confirm, Popup  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import {Link} from 'react-router-dom';






const roomsOptions = [
    {
      key: 'Bedroom',
      text: 'Bedroom',
      value: 'Bedroom',
      image: { avatar: true, src: 'https://i.ibb.co/q5chr0v/bedroom.jpg' },
    },
    {
      key: 'Children\'s Room',
      text: 'Children\'s Room',
      value: 'Children\'s Room',
      image: { avatar: true, src: 'https://i.ibb.co/z56vWD4/childern-room.jpg' },
    },
    {
      key: 'Badroom',
      text: 'Badroom',
      value: 'Badroom',
      image: { avatar: true, src: 'https://i.ibb.co/yf0kh97/badroom.jpg' },
    },
    {
      key: 'Living room',
      text: 'Living room',
      value: 'Living room',
      image: { avatar: true, src: 'https://i.ibb.co/XyyRQc4/living-room.jpg' },
    },
    {
      key: 'Game room',
      text: 'Game room',
      value: 'Game room',
      image: { avatar: true, src: 'https://i.ibb.co/pK4KMQH/game-room.jpg' },
    },
    {
      key: 'Kitchen',
      text: 'Kitchen',
      value: 'Kitchen',
      image: { avatar: true, src: 'https://i.ibb.co/WWdzswf/kitchen.jpg' },
    },
    {
      key: 'Porch',
      text: 'Porch',
      value: 'Porch',
      image: { avatar: true, src: 'https://i.ibb.co/sKs3Xyw/porch.jpg' },
    }
  ];
  
  
  
  const colorOptions = [
      {
        key: 'red',
        text: 'red',
        value: 'red',
        label: { color: 'red', empty: true, circular: true },
      },
      {
        key: 'blue',
        text: 'blue',
        value: 'blue',
        label: { color: 'blue', empty: true, circular: true },
      },
      {
        key: 'black',
        text: 'black',
        value: 'black',
        label: { color: 'black', empty: true, circular: true },
      },
      {
        key: 'purple',
        text: 'purple',
        value: 'purple',
        label: { color: 'purple', empty: true, circular: true },
      },
      {
        key: 'orange',
        text: 'orange',
        value: 'orange',
        label: { color: 'orange', empty: true, circular: true },
      },
      {
        key: 'pink',
        text: 'pink',
        value: 'pink',
        label: { color: 'pink', empty: true, circular: true },
      },
      {
        key: 'green',
        text: 'green',
        value: 'green',
        label: { color: 'green', empty: true, circular: true },
      },
    ]


export default class AddRoom extends Component {
  

  constructor(props) {
    super(props)
  
    this.state = {
      type: '',
      name: '',
      color: '',

    }
  }


    checkRegister=()=>{
      if (this.state.type != '' && this.state.name != ' ' && this.state.name != '' && this.state.color != ''){
        this.props.add(this.state.type, this.state.name, this.state.color)
        this.props.registerSuccsess(true)
    }
    else{
      this.props.registerSuccsess(false)
    }
  }

        


    render() {
        return (
          <div>

        <p className='new-room-mesaage'>Let's register a new room...</p>
        
        <div className='select-room'>       
        <Dropdown
        placeholder='Select room type...'
        fluid
        selection
        options={roomsOptions}
        onChange={(e, {value}) => this.setState({type: value})}
        />
        </div>

        <div className='room-name-input'>
        <Input onChange={(e)=> {this.setState({name: e.target.value})}} style={{width: '100%'}} maxLength="5" placeholder='Room name... ' />
        </div>
        
        <div className='select-color-room'>
        <Dropdown
        placeholder='Select room colour...'
        fluid
        selection
        options={colorOptions}
        onChange={(e, {value}) => this.setState({color: value})}
        />
        </div>


        <Link to='/registration-message'>
        <button onClick={this.checkRegister} className='btn-register-room'>Register room...</button>
        </Link>


      </div>
        )
    }
}
