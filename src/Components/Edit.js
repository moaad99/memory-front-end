import React , {useState} from 'react'

import {useDispatch} from 'react-redux'

import {updatePost} from '../Actions/postAction'

export default function Edit({postid,postt}) {

    const dispatch = useDispatch()
    const [file,setFile] =useState("")
    const [creator,setCreator] =useState("")
    const [title,setTitle] =useState("")

    const [message,setMessage] =useState("")


   
        const handl=(e)=>{
           

           setFile(e.target.files[0])

        }
      
        const sub=(e) =>{
            e.preventDefault()
          
            const formData= new FormData();

            
            formData.append('title',title)
            formData.append('message',message)
            formData.append('creator',creator)
            formData.append('article',file)
        
            setTitle("");
    setMessage("");
    setFile("");  
    setCreator(""); 
            
          dispatch(updatePost(postid,formData))

        }




    return (
        <div className="container">
      <form onSubmit={sub} encType="multipart/form-data" style={{marginTop:"30px"}} className="ff">

         
          
        <label style={{marginInline:"10px",marginBottom:"8px"}}  htmlFor="">Name of Creator</label>
        <input placeholder={`${postt.creator} `} onChange={(e)=> setCreator(e.target.value) }   id='creator' type="text" className="form-control" />
        
        <label style={{marginInline:"10px",marginBottom:"8px"}}  htmlFor="">Title</label>
        <input  placeholder={`${postt.title} `}  onChange={(e)=> setTitle(e.target.value) }   id='title' type="text" className="form-control"  />

        <label style={{marginInline:"40px",marginBottom:"8px"}} htmlFor="">Description</label>
       <textarea placeholder={`${postt.message} `}  onChange={(e)=> setMessage(e.target.value) }   id='message' style={{marginInline:"17px"}}  name=""  cols="50" rows="5"></textarea>
        <br/>
        <label style={{marginInline:"10px",marginBottom:"8px"}} htmlFor="">Image</label>
        <br/>

        <input  type="file"
            filename="selectedFile"
            onChange={handl}
        />
<br/><br/>
        <button type="submit" className="btn btn-block btn-dark">Update Post</button>

      </form>
        </div>
    )
}





