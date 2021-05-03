import React , {useState} from 'react'

import {useDispatch} from 'react-redux'
import toastr from 'toastr';
import "toastr/build/toastr.css";

import {createpost} from '../Actions/postAction'

export default function Form() {

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
            
          dispatch(createpost(formData))

        }




    return (
        <div className="container">
      <form onSubmit={sub} encType="multipart/form-data" style={{marginTop:"30px"}} className="ff">

         
          
        <label style={{marginInline:"10px",marginBottom:"8px"}}  htmlFor="">Name of Creator</label>
        <input value={creator} onChange={(e)=> setCreator(e.target.value) }   id='creator' type="text" className="form-control" />
        
        <label style={{marginInline:"10px",marginBottom:"8px"}}  htmlFor="">Title</label>
        <input value={title} onChange={(e)=> setTitle(e.target.value) }   id='title' type="text" className="form-control" />

        <label style={{marginInline:"40px",marginBottom:"8px"}} htmlFor="">Description</label>
       <textarea value={message} onChange={(e)=> setMessage(e.target.value) }   id='message' style={{marginInline:"17px"}}  name=""  cols="30" rows="5"></textarea>
        <br/>
        <label style={{marginInline:"10px",marginBottom:"8px"}} htmlFor="">Image</label>

        <input  type="file"
            filename="selectedFile"
            onChange={handl}
        />
<br/><br/>
        <button type="submit" className="btn btn-block btn-black">Create Post</button>
        <br/>
      </form>
        </div>
    )
}





