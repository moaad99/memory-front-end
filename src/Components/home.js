import React, {useEffect,useState} from 'react'

import {useSelector} from 'react-redux'

import {useDispatch} from 'react-redux'

import {getPost} from '../Actions/postAction'
import Card from './Card'
import Form from './Form'


export default function Home() {

   const dispatch = useDispatch()

   let b=0;

    const p = useSelector(state => state.posts)

    

  
        useEffect(() => {
           dispatch(getPost())
           
        }, [dispatch])
    
    return (


        <div className="bd">
            
,
            <div className="header">
                
        <div className='mem' style={{marginTop:"10px"}} >
                <h1   style={{color:"white",fontFamily:"serif"}} >
                
                Memory
     
                </h1> 
                </div>
                <div style={{marginTop:"10px"}} className="e">
                    <img className="hj" src="https://icon-library.com/images/memories-icon/memories-icon-23.jpg" alt=""/>
                </div>
            </div>

        <div className="container">


            <div  className="all">
            <div  className="form">


            <Form  />

                </div>

                <div  className="post">

                <div className="row row-cols-1 row-cols-md-2 g-4">

     
                { p.post && p.post.map((postss,index)=>(
  <div key={index} class="col">
      
     
      <Card post={postss}/>
        
      
      </div>


                ))}
                 
                  </div>
                </div>

               

            </div>

        </div>


        </div>
    )
}

