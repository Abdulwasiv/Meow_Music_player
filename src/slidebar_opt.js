import React from "react";
import './slidebar_opt.css'

function Slidebar_opt({title,Icon})
{
 return(
<div className="slide_opt">
 {Icon && <Icon className="icon"/>}
  {Icon ?<h3>{title}</h3>:<p>{title}</p>}
  
</div>
 )
}
export default Slidebar_opt