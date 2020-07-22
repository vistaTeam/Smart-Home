import React, { Component } from 'react'
import '../App.css';
import {Link, Redirect} from 'react-router-dom';
import Notiflix from 'notiflix';
import { Dropdown, } from 'semantic-ui-react';
import Item from './Item.js'


const itemsOptions = [
    {
      key: 'Boiler',
      text: 'Boiler',
      value: 'Boiler',
      image: { avatar: true, src: 'https://i.ibb.co/9pxHZ4g/boiler.jpg' },
    },
    {
      key: 'Air-Conditioner',
      text: 'Air-Conditioner',
      value: 'Air-Conditioner',
      image: { avatar: true, src: 'https://i.ibb.co/0JLVQr9/airconditioner.jpg' },
    },
    {
      key: 'Light',
      text: 'Light',
      value: 'Light',
      image: { avatar: true, src: 'https://i.ibb.co/SXsk69c/light.png' },
    },
    {
      key: 'Stereo',
      text: 'Stereo',
      value: 'Stereo',
      image: { avatar: true, src: 'https://i.ibb.co/7yd1wvB/stereo.jpg' },
    },
    {
      key: 'cctv',
      text: 'cctv',
      value: 'cctv',
      image: { avatar: true, src: 'https://i.ibb.co/cgQKRym/cctv.jpg' },
    } 
  ];


Notiflix.Confirm.Init({
    className: 'notiflix-confirm',
    width: '300px',
    zindex: 4003,
    position: 'center', // 'center' - 'center-top' -  'right-top' - 'right-bottom' - 'left-top' - 'left-bottom'
    distance: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '25px',
    backOverlay: true,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    rtl: false,
    useGoogleFont: false, // v2.2.0 and the next versions => has been changed as "false"
    fontFamily: 'Nunito',
    cssAnimation: true,
    cssAnimationStyle: 'fade', // 'zoom' - 'fade'
    cssAnimationDuration: 300,
    plainText: true,
   
    titleColor: 'red',
    titleFontSize: '16px',
    titleMaxLength: 34,
   
    messageColor: 'red',
    messageFontSize: '14px',
    messageMaxLength: 110,
   
    buttonsFontSize: '15px',
    buttonsMaxLength: 34,
    okButtonColor: '#f8f8f8',
    okButtonBackground: 'red',
    cancelButtonColor: '#f8f8f8',
    cancelButtonBackground: '#a9a9a9',
  });



export default class Room extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             type: props.room.type,
             name: props.room.name,
             color: props.room.color,
             index: props.index,
             layout: true,
             item: '',
             items: props.room.items || []

                    }

    }


    delete=()=>{

        Notiflix.Confirm.Show(
            'Delete Room',
            'Are you sure you want to delete room name: ' + this.state.name + '?',
            'Delete',
            'Cancel',
           
            // ok button callback
            ()=>{
            this.props.delete(this.state.index)
            Notiflix.Notify.Failure('Room name \'' + this.state.name + '\' deleted');
            },
           
            // cancel button callback
            ()=>{
            },
          );
        }



    addItem=()=>{
      if(this.state.item == ''){
        return Notiflix.Notify.Failure('Please choose an item!');
      }
      else if (this.state.item == 'Stereo'){
        if (this.state.items.some(e => e.item === 'Stereo')){
        Notiflix.Notify.Failure('You can add only 1 stereo per room');
        return this.setState({layout: true});
      }}

      if(this.state.items.length >= 5){
      Notiflix.Notify.Failure('You have reached the max. of 5 items per room');
      return this.setState({layout: true});
      }

      if(this.state.item == 'Boiler'){
          if (this.state.type != 'Badroom'){
            Notiflix.Notify.Failure('You can add a boiler only on a Badroom');
            return this.setState({layout: true});
          }}


        this.props.addingItem(this.state.item, this.state.index)
        this.setState({layout: !this.state.layout});
    }

    changeStatus=(s, i, item)=>{
      this.props.changeSwitch(s,i,this.state.index)
      if(s == false){
        Notiflix.Notify.Warning(item +' is off');
      }
      else{
        Notiflix.Notify.Info(item +' is on');
      }
    }





        changeLayout=()=>{
            if(this.state.layout){
                return(
                    <div>
                        <div className='items-show'>
                        {this.state.items.map((i, s)=>{
                          return  <Item itemName={i.item}  itemStatus={i.status}  itemIndex={s}  changeStatus={this.changeStatus}/>
                        })}
                        </div>
                        <button onClick={()=>{this.setState({layout:false})}} className='add-item'>Add new item</button><br/>
                        <hr className='room-hr'/>
                        <Link to={'/'}>
                        <button className='delete-btn' onClick={this.delete}>Delete Room</button>
                        </Link>
                    </div>
                )
            }


            else{
                return(
                        <div>
                            <p className='new-item-message'>please choose a new item...</p>
                            <div className='select-room'>       
                            <Dropdown
                            placeholder='Select a new item...'
                            fluid
                            selection
                            options={itemsOptions}
                            onChange={(e, {value}) => this.setState({item: value})}
                            />
                            <button className='btn-register-room' onClick={this.addItem}>Add item</button>
                            </div>



                        </div>
                )
            }
        }

    render() {

        return (
            <div>
                  <hr className='room-hr'/>
                <div className='room-type'>Room Type: {this.state.type}</div>
                <div className='room-type'>Room Name: {this.state.name}</div>
                <hr className='room-hr2'/>
                {this.changeLayout()}
            </div>
        )
    }
}