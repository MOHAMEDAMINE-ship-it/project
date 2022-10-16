

import React,{useEffect,useState,Fragment}from 'react'
import './Home.css'

import axios from 'axios'
import {Link} from 'react-router-dom';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



import Card from './Card'





const Home = (props) => {
  
  const[posts,setposts]=useState([])
  const[blog,setblog]=useState({})
  
 const[result,setresult]=useState({})
 const[comm,setcomm]=useState([])
  
  


useEffect(()=>{
    getallblogs();
    getcomments()
    
   
     
},[])


const getcomments=()=>{
    axios.get('http://localhost:5000/api/v4/getall').then((response)=>{
       const comments= response.data.listcommnet;
        console.log(comments);
        setcomm(comments)
    })
}

 
  const searchfn=(title)=>{
      const res= posts.filter(e=>e.title==props.keysearch)

      setresult(res)
      return  (
       <Card item={result}></Card>
      )
     

   
     
    

  }
 const handleDetail=(id)=>{
    axios.get('http://localhost:5000/api/'+id).then((response)=>{
        const res=response.data
        
         console.log(res)
        setblog(res)
       
    
        console.log(blog)

       
    }).catch((err)=>{
       
        console.error(`error'${err}`)
    })

}






    
const getallblogs=()=>{
    axios.get('http://localhost:5000/api').then((response)=>{
        const allposts=response.data.posts;
     
        setposts(allposts)
        console.log(posts)
      
        

    }).catch((err)=>{
        console.error(`error'${err}`)
        console.log(err)
    })
}

  
    
    return ( 
        
      
        <Fragment>
           
       
            <div className='container_all'>
       
           

            
          <div className='container_blogs'>  

       
       {posts.filter((val)=>{
        if(props.keysearch==""){
            return val
        }else if(val.title.toLowerCase().includes(props.keysearch.toLowerCase())){
             return val
        }
       }).map((val, index)=>

       <Card   item={val}  comments={comm} key={index}></Card>
      
       )}
      </div>
        </div>

   
            
       
               
        
        <div className='addblog'>
       <Link to='/add_blog'>
       <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>

    </Link>
        
        </div>
       
                    </Fragment>
            
           
        
        
     );
}
 
export default Home;