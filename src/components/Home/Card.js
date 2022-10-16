import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom';
import personne from '../../images/personne.jpg'
import CreateIcon from '@mui/icons-material/Create';


const Card = (props) => {
    const item=props.item;
   
    return ( 


        <div className='container' >
       
        <div className='img_pod'> <img src={personne}></img></div>
         <div className='title'>
           
           { item.title}</div> 
           <div className='line'></div>
           <div className='user'>
               <div className='usertext'> <span><CreateIcon/></span> <span>written by:</span><span>{item.username}</span></div>
                </div>
                <div className='line'></div>
         <div className='desc'>
           <div className='dess'><span></span>Description  </div>
           <div className='des'> { item && item.desc} </div>
           
           </div>
           <Link to={'/'+item._id}> <div className='butt'><button id='btn'>more detail</button></div></Link>
          
          
           
          
        
      </div>
 
     );
}
 
export default Card;