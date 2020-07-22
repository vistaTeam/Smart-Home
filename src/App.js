import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import HomePage from'./components/HomePage.js';
import AddRoom from './components/AddRoom.js';
import RegistrationMesssage from './components/RegistrationMessage.js';
import Rooms from './components/Rooms.js';
import Room from './components/Room.js';
import Welcome from './components/Welcome.js';



export default class App extends Component {

    state={
        list:[],
        temp: true,
        check: false,
        tempRoom: {},
        tempIndex: '',

    }
    

    addNewRoom=(t,n,c)=>{
        const temp = {type: t, name: n, color: c, items: []}
        this.setState({temp: {type: t, name: n, color: c,}})
        this.setState({list: [...this.state.list, temp]})
    }

    sucsessNewRoom=(t)=>{
        return this.setState({check: t})
    }

    getIndex=((i)=>{
    let tRoom = this.state.list.filter((e, index)=>(index == i));
    this.setState({tempRoom: tRoom[0]})
    this.setState({tempIndex: i})
    })
    
    deleteRoom=(i)=>{
        let tempList = this.state.list.filter((element, index)=>(index!=i));
        this.setState({list: [...tempList]})
    }

    addItem=(item, index)=>{
        let tempItems = this.state.list
        tempItems[index].items = [...tempItems[index].items, {item: item, status: false}];
        this.setState({list: tempItems});
    }


    changeStatus=(s,i,index)=>{
        let tempList = this.state.list
        tempList[index].items[i].status = s;
        this.setState({list: tempList});
    }





    render() {

        const rooms = this.state.list.map((e, i)=>{
            return <Rooms name={e.name} color={e.color} index={i} indexRoom={this.getIndex}/>
        })


        return (

            <div className="App">
                <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                   

        <Router>
            <Link to='/'>
            <img src={logo} className="App-logo" alt="logo" />
            </Link>

            <Switch>
                
                {/* home page */}
                <Route exact path='/'>
                <Route exact path='/' component={()=> {return <Welcome/>}} />
                <div className='rooms-style'>
                <Route exact path='/' component={()=> { return rooms }}/>
                </div>
                <Route exact path='/' component={()=> {return <HomePage />}} />
                </Route>

                {/* Add Room */}
                <Route exact path='/AddRoom' component={()=> {return <AddRoom add={this.addNewRoom} registerSuccsess={this.sucsessNewRoom}/>}} />

                {/* Registration successful */}
                <Route exact path='/registration-message' component={()=> {return <RegistrationMesssage type={this.state.temp.type} name={this.state.temp.name} color={this.state.temp.color} check={this.state.check}/>}} />

                {/* Room settings */}
                <Route exact path='/room' component={()=> {return <Room room={this.state.tempRoom}
                                                                        index={this.state.tempIndex}
                                                                        delete={this.deleteRoom}
                                                                        addingItem={this.addItem}
                                                                        changeSwitch={this.changeStatus}
                                                                        />}} />

           
            </Switch>
        </Router>



            </div>
            <div className='col-4'></div>
        </div>
        </div>
        </div>
        )
    }
}
