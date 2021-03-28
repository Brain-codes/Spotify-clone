import React from 'react'
import './SongRow.css'

function SongRow(props) {
    const { track,trackuri, chooseTrack } = props  //destructured props
    // console.log('songrow', track)
     console.log('songrow trackuri' , trackuri)

    const playSong = () => {
        chooseTrack(track)
    }


    return (
        <div className="songrow" onClick={playSong}>

            <div className="songrow__title">

                <img className="songrow__image" src={track.album.images[0].url} alt="" />

                <div className="songrow__info">
                    <h1>{track.name}</h1>
                    <p>{track.artists.map(artist => artist.name).join(",")} </p>

                </div>

            </div>

            <div className="songrow__album">
                {track.album.name}
            </div>
            
            <div className="songrow__date">
            <p>{track.album.release_date}</p>
            </div>

            <div className="songrow__duration">
            <p>{track.duration_ms}</p>
            </div>

        </div>
    )
}

export default SongRow
