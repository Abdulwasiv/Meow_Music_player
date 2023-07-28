import React from "react";
import './sond.css'
function Songrow ({track, playSong })
{

 return(
  <div className="songRow" onClick={() => playSong(track.id)}> <img src={track.album.images[0].url} className="sr_album"/>
   <div className="sr_info">
    <h1>{track.name}</h1>
    <p>
     {track.artists.map((artist)=>artist.name).join(", ") }-{" "}
     {track.album.name}
    </p>
   </div>
  </div>
 )
}

export default Songrow;