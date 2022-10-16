
import axios from "axios";
import React,{ Fragment,useState ,useEffect} from "react";
import {  useParams } from 'react-router-dom';
import './Blog.css'
import CardDetail from "./blogDetailCard";
import Comment from "../comment/Comment";

  

const BlogDetail = () => {
      
    const [blogdet, setblogdet] = useState({});
 
    const {id}=useParams();



  const[test,settest]=useState([])

console.log(blogdet)
 
    useEffect(()=>{
       
        axios.get("http://localhost:5000/api/"+id).then((response)=>{
        const res= response.data;
       setblogdet(res)},
       
      
       
       )
    
    

       
   
       
        

        

    },[])



    

  
      
    return ( 
        <Fragment>
       
            <div className="detcommm">
            <div className="leftdet">
          <CardDetail blogdet={blogdet} >

      
         </CardDetail>
          </div>
      
        <div className="rightcomm">
        <Comment  comments={blogdet.comments} id={id}></Comment>
        </div>
      
            </div>
        
       
         
        </Fragment>
        



     );

}      
     
  
export default BlogDetail;