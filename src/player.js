import React from "react";
import Slidebar from './slidebar'
import Body from './body'
import Footer from './footer'
import './player.css'
function Player({spotify})
{

 return(
  <div className="player">
   <div className="player_body">

   <Slidebar />
   <Body spotify={spotify}/>
   </div>
   <Footer spotify={spotify} />
  </div>
 )
 
}
export default Player;