
import './App.css';
import Header from '../src/components/header/header'
import React from 'react'
import { BrowserRouter as Router, Route, Routes,Switch } from "react-router-dom";
import Home from '../src/components/Home/Home'
import Blog from './components/Blog/BlogDetail'
import AddBlog from './components/Addblog/AddBlog'
import{useState} from 'react'

import  Comment from './components/comment/Comment'


function App() {
  
const[searchkey,setsearchkey]=useState('');





//<Route path="comments" component={() => (<Comments myProp="value" />)}/>
  return (
    <Router>
         <Header set={setsearchkey} searchkey={searchkey}></Header>
         <Switch>
         <Route exact path="/"    component={()=>(<Home keysearch={searchkey}/>)} /> 
        
         <Route path='/add_blog' component={AddBlog}></Route> 
        
         <Route path='/:id' component={Blog}></Route>
         <Route path='*'  component={Home} /> 
              
         </Switch>
 
    </Router>
  
   
   
    
    
  );
}

export default App;
