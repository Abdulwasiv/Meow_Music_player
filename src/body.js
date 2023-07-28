import React from "react";
import './body.css'
import Header from './header'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Songrow from "./Songrow";

import {Usedatalayer} from './datalayer'

function Body({spotify})
{
 const[{discover_weekly },dispatch] =Usedatalayer();
 
 
 const playPlaylist = (id) => {
  spotify
    .play({
      context_uri: `spotify:playlist:5Nyt9CBRNOalC79o8cnYy8`,
    })
    .then((res) => {
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      });
    });
};

const playSong = (id) => {
  spotify
    .play({
      uris: [`spotify:track:${id}`],
    })
    .then((res) => {
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      });
    });
};

return (
 <div className="body">
  <Header spotify={spotify} />
  <div className="B-info">
   <img  src={discover_weekly?.images[0].url} width={80} />
 <div className="b-text">
 <strong>PLAYLIST</strong>
 <h1>Discover Weekly</h1>
 <p>{discover_weekly?.description}</p>
 </div>
   </div>

   <div className="body_songs"> 
    <div className="body_icons">
     <PlayCircleFilledIcon className="body_shuf" fontSize='large'/>
     <FavoriteIcon />
     <MoreHorizIcon/>
     <div>
      {discover_weekly?.tracks.items.map((item)=>(
       <Songrow playSong={playSong}track={item.track}/>
     ) )}  </div>
    </div>
   </div>
 </div>
)

}

export default Body;