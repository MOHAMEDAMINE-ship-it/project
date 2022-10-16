

import React from "react";
const CardDetail = ({blogdet}) => {
    return (  
     
        <div className="blog">

             <div className="title_blg"> <p>{blogdet.title}</p></div>
             <div className="separate"></div>
             <div className="writer"><span>writen by:</span><span>{blogdet.username}</span></div>
             <div className="separate_2"></div>

             <div className="des_1"><p>{blogdet.desc }</p></div>
             
             </div>
       
       
      



      

    );
}
 
export default CardDetail;