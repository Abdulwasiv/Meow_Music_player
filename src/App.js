import './App.css';
import Login from './login';
import {gettoken} from './spotify'
import React,{ useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './login.css'
import {Usedatalayer} from './datalayer'
import Player from './player'
import { PlaylistAdd } from '@mui/icons-material';

function App() {
  
const spotify =new SpotifyWebApi();

  const [{user,token},dispatch] =Usedatalayer();

 useEffect(()=>
 {
  const hash=gettoken();
  window.location.hash= ""
  const token1=hash.access_token
  
  if(token1)
  {
    dispatch(
      {
        type:"SET_TOKEN",
        token:token1
      }
    )
  spotify.setAccessToken(token1)
   console.log(token1)
 
  spotify.getUserPlaylists().then((playlists)=>{
    dispatch({
      type:'SET_PLAYLISTS', 
      playlists:playlists,
    })
  })
  spotify.getPlaylist('5Nyt9CBRNOalC79o8cnYy8').then(response=>{dispatch(
    {
     type:'SET-DISCOVER-WEEKLY',
     discover_weekly:response 
    }
  )})

  
  spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });

      });
    }
  }, [token, dispatch]);

  return (
    <div >
      
      {!token && <Login />}
      {token && <Player spotify={spotify} />}

    </div>
  );
}

export default App;
/**/