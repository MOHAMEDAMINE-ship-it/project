import{Fragment} from 'react'
import ninjalogo from '../../images/ninja.png'
import HomeIcon from '@mui/icons-material/Home';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InputAdornment from '@mui/material/InputAdornment';
import './Header.css'
import React from 'react'
import { useState } from 'react';


const Header = (props) => {
     

   
     
    return ( 
        <Fragment>
            
             <div className='header'>
                <div className=''><img className='logo'   src={ninjalogo}></img></div>
                <div className='headers-links'>
                    <div className='homepage'>  <div className='logo1'><HomeIcon style={ {fontSize:"40px"}}/></div><div className='text'>Home</div></div>
                   
                    <div className='blogs'><div className='logo1'><BubbleChartIcon style={ {fontSize:"40px"}}/></div><div className='text'>Blogs</div></div>
                    <div className='wrapper'><div className='icon'><SearchIcon></SearchIcon></div><input className='input' placeholder='input'  value={props.searchkey}  onChange={ (e)=>props.set(e.target.value)}></input></div>

               
                </div>
              



    



 


           </div> 
        </Fragment>
        
     );
}
 
export default Header;