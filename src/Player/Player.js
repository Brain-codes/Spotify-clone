import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import './Player.css'



function Player(props) {
    return (
        <div className="player">
            <div className="player__body">
            <Sidebar/>
            <Body spotify={props.spotify}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Player
