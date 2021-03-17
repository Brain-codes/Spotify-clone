import React, {useEffect } from 'react';
import './App.css';
import Login from './Login/Login';
import Player from './Player/Player';
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi  from 'spotify-web-api-js'
import { useStateVal } from './Hooks/StateProvider';


const spotify = new SpotifyWebApi()

function App() {
  const [{user,token}, dispatch] = useStateVal()

  console.log('user from the reducer', user)


  useEffect(() => {
    const hash = getTokenFromUrl()
    console.log('(hash', hash)
    const _token = hash.access_token
    console.log(_token)
    window.location.hash = ""


    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token:_token
      })



      spotify.setAccessToken(_token)
      spotify.getMe().then(user=>{
        console.log('user from spotify',user)

        dispatch({
          type: 'SET_USER',
          user

        })
      })

      spotify.getUserPlaylists().then(playlists=>{
        console.log('playlist of user from spotify',playlists)

        dispatch({
          type: 'SET_PLAYLIST',
          playlists    //playlists:playlists
        })
      })


      //getting a single playlist i.e billboard playlist

      spotify.getPlaylist('6UeSakyzhiEt4NB3UAd6NQ').then(response =>{
        console.log(response)
        dispatch({
          type: 'SET_BILLBOARD',
          billboard: response
        })
      })

    }
  }, [])

  return (
    <div className="app">

      {
        token ? <Player spotify={spotify}/> : <Login />
      }


    </div>
  );
}

export default App;
