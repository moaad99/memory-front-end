import React , {useState} from 'react'

import {useDispatch} from 'react-redux'
import toastr from 'toastr';
import "toastr/build/toastr.css";


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

          toastr.info('Post Updated succecfully')



        }




    return (
        <div className="container">
      <form onSubmit={sub} encType="multipart/form-data" style={{marginTop:"30px"}} className="ff">

         
          
        <label style={{marginInline:"10px",marginBottom:"8px"}}  htmlFor=""><strong>Name of Creator</strong></label>
        <input defaultValue={postt.creator}  onChange={(e)=> setCreator(e.target.value) }   id='creator' type="text" className="form-control" />
        
        <label style={{marginInline:"10px",marginBottom:"8px"}}  htmlFor=""><strong>Title</strong></label>
        <input  defaultValue={postt.title}  onChange={(e)=> setTitle(e.target.value) }   id='title' type="text" className="form-control"  />

        <label style={{marginInline:"10px",marginBottom:"8px"}} htmlFor=""><strong>Description</strong></label>
       <textarea defaultValue={postt.message}  onChange={(e)=> setMessage(e.target.value) }   id='message' style={{marginInline:"17px"}}  name=""  cols="48" rows="5"></textarea>
        <br/>
        <label style={{marginInline:"10px",marginBottom:"8px"}} htmlFor=""><strong>Image</strong></label>
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





