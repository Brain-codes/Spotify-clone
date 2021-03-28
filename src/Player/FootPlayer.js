import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';
import './FootPlayer.css'


function FootPlayer(props) {
    console.log('footplayer props.trackuri',props.trackuri)
    console.log('footplayer props.token',props.token)

    if (!props.token) return null;
    return (


        <div className="footplayer">

            <SpotifyPlayer styles={{
                    activeColor: '#fff',
                    bgColor: '#333',
                    color: '#fff',
                    loaderColor: '#1cb954',
                    trackArtistColor: '#ccc',
                    trackNameColor: '#fff'
                }}
                token={props.token}
                showSaveIcon
                uris={props.trackuri ? [props.trackuri] : []}
            />

        </div>
    )

}

export default FootPlayer
