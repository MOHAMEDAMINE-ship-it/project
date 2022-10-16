import React,{ Fragment,useState ,useEffect} from "react";
import { useAlert } from 'react-alert'
 import axios from "axios";
import './Comment.css'

const Comment = ({comments, id}) => {
const[comment,setcommnet]=useState('')





   
   
   
   
  

  


 

  


const alert = useAlert()

//console.log(comments)

 const onsubmit=(e)=>{


  axios.post('http://localhost:5000/api/'+id+'/comment',{
    comment:comment
  }).then(()=>  window.location.reload())
   


 }



  

 
    return ( <>


      <div className="containercomm">
      {comments && comments.map((item,index)=>
     
        
  <div className="dialogbox" key={index}>
    <div className="body">
      <span className="tip tip-up"></span>
     
      <div className="message" >
        <span>{item.text} </span>
      </div>
    </div>
  </div>
  
)}
<div className="commentinput">
<div className="addcomment">
  <input type="text"  value={comment} onChange={(e)=>setcommnet(e.target.value)} placeholder="add comment"></input>
  <button onClick={onsubmit}> add comment</button>
</div>



</div>



</div>
      
    </> );
}
 
export default Comment;