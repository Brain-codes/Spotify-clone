import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
// import Footer from './Footer'
import './Player.css'
import FootPlayer from './FootPlayer'
import { useStateVal } from '../Hooks/StateProvider'




function Player(props) {
    const [{token }] = useStateVal()
  
    const [playingTrack, setPlayingTrack] = useState()


    const chooseTrack= (track) =>{
        setPlayingTrack(track)
        console.log('chooseTrack track:', track)
    }

    console.log('playing track',playingTrack)
    console.log('playing trackuri',playingTrack?.uri)

    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={props.spotify} chooseTrack={chooseTrack} />
            </div>
            <FootPlayer token={token} trackuri={playingTrack?.uri} />
              

            {/* <Footer/> */}
        </div>
    )
}

export default Player
