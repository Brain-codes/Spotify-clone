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

  console.log('user rom the reducer', user)

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

    }
  }, [])

  return (
    <div className="app">

      {
        token ? <Player/> : <Login />
      }


    </div>
  );
}

export default App;
