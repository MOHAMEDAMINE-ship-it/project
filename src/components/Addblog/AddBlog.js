import React,{ Fragment,useState ,useEffect} from "react";
import axios from "axios";
  import './Addblog.css' 
import { useAlert } from 'react-alert'
import { useHistory } from "react-router-dom"
   const AddBlog = () => {
 
const[username,setuser]=useState('');
const[title,settitle]=useState('');
const[desc,setdesc]=useState('');
const alert = useAlert()
const history=useHistory();
  

   const registerSubmit=(e)=>{
    
    e.preventDefault();

   
  
     axios.post(`http://localhost:5000/api/creatpost`, {
   username:username,
   desc:desc,
   title:title

    }).then((res)=>{
        if(res.data.status==200){
                 }
       
    }).catch((err)=>{
        return alert.show('error:'+err.message.data)
    })
    

    history.push('/')   

   }
    

  

   
  






        return ( 
            <Fragment>
           

   <div className="cont_d">
    <div className="back_d">
        <div className="title_add"><p>add a blog</p></div>
        <div className="blog">
           <form
                className="signUpForm"
              
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                 
                  <input
                  className="form__field"
                    type="text"
                    placeholder="username"
                    required
                    name="username"
                    value={username}
                    onChange={(e)=>setuser(e.target.value)}
                  ></input>
                </div>
                <div className="signUpEmail">
                
                  <input
                    className="form__field"
                    type="text"
                    placeholder="title"
                    required
                    name="title"
                    value={title}
                    onChange={(e)=>settitle(e.target.value)}
                  ></input>
                </div>
                <div className="signUpPassword">
             
                  <textarea
                    className="textaria"
                    type="text"
                    placeholder="descripttion"
                    required
                    name="desc"
                    value={desc}
                    onChange={(e)=>setdesc(e.target.value)}
                  ></textarea>
                </div>

               <div><input type="submit" value="Register" className="signUpBtn" ></input></div> 
            
              </form>
              
               </div>
               </div>
               </div>
            </Fragment>
         );
    }
     
    export default AddBlog;