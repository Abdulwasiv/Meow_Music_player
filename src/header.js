import React from 'react'
import './head.css'
import SearchIcon from '@mui/icons-material/Search'
import {Avatar} from '@mui/material'
import {Usedatalayer} from './datalayer'
import { useEffect } from "react";

function Header({ spotify })
{
 const [{user},dispatch]=Usedatalayer();

 return(
  <div className='head'>
  <div className='h_left'>
   <SearchIcon/>
   <input type='text' placeholder='Search for artist , Songs , Playlists' />
  </div>
   <div className='h_right'>
    <Avatar src={user?.images[0]?.url} 
    />
    <h3>{user?.display_name}</h3>
   </div>
   </div>
 )
}

export default Header