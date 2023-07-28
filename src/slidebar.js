import React from "react";
import './slidebar.css'
import Slidebar_opt from "./slidebar_opt";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { getTokenFromResponse } from "./spotify";
import {Usedatalayer} from './datalayer'

function Slidebar()
{
 const [{playlists},dispatch]= Usedatalayer();
return(
 <div className="slide">
  <h3 className="slide_bar" ><span className="new">M</span><span>EOW</span></h3>
  <Slidebar_opt Icon={HomeIcon} title="Home"/>
  <Slidebar_opt Icon={SearchIcon} title="Search"/>
  <Slidebar_opt Icon={LibraryMusicIcon} title="Your Library" />
  <br/>
  <strong className="font">PLAYLISTS</strong>
  <hr />
  
  <div className="play">
   {playlists?.items?.map(playlist =>
   (
    <Slidebar_opt title={playlist.name }/>
   )
   )}
   </div>

 </div>
)

}

export default Slidebar;