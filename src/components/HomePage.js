import React, { Component } from 'react'
import '../App.css';
import addAnimation from '../img/11859-add.json';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';



export default class HomePage extends Component {

// constructor(props) {
//   super(props)

//   this.state = {
//      images:{bedroom: 'https://i.ibb.co/q5chr0v/bedroom.jpg',
//             childrensRoom: 'https://i.ibb.co/z56vWD4/childern-room.jpg',
//             badroom: 'https://i.ibb.co/yf0kh97/badroom.jpg',
//             livingRoom: 'https://i.ibb.co/XyyRQc4/living-room.jpg',
//             gameRoom: 'https://i.ibb.co/pK4KMQH/game-room.jpg',
//             kitchen: 'https://i.ibb.co/WWdzswf/kitchen.jpg',
//             porch: 'https://i.ibb.co/sKs3Xyw/porch.jpg'

    
    
    
//     }
//   }
// }


    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: addAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'

            }
          };

        return (
          <div>

        <Link to='/AddRoom'>
        <Lottie options={defaultOptions} width={100} height={100}/>
        </Link>


                
        </div>
        )
    }
}
