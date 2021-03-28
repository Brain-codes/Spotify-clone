import React from 'react'
import { useStateVal } from '../Hooks/StateProvider'
import BodyHeader from './BodyHeader'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import FavoriteIcon from '@material-ui/icons/Favorite'
import './Body.css'
import SongRow from './SongRow'

function Body(props) {
    const [{billboard}] = useStateVal()
    console.log('billboard in body', billboard)




    return (
        <div className="body">
          <BodyHeader spotify={props.spotify}/>

          <div className="body__info">
              <img  src={billboard?.images[0]?.url} alt=""/>

              <div className="body__text">
                  <strong>PLAYLISTS</strong>
                  <h2>{billboard?.name}</h2>
                  <p>{billboard?.description}</p>
              </div>
          </div>

          <div className="body__songs">
              <div className="body__icons">
                  <PlayCircleFilledIcon className="body__shuffle"/>
                  <FavoriteIcon fontSize="large"/>
                  <MoreHorizIcon/>

              </div>

              <div>
                  {
                      billboard?.tracks.items.map(item =>{
                        
                        return(
                            <SongRow track={item.track} trackuri={item.track.uri} chooseTrack={props.chooseTrack}/>
                          )
                      })
                  }
              </div>

          </div>
            
        </div>
    )
}

export default Body
