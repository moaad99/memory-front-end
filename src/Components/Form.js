import React , {useState} from 'react'

import {useDispatch} from 'react-redux'

import {createpost} from '../Actions/postAction'

export default function Form() {

    const dispatch = useDispatch()
    const [file,setFile] =useState("")
    const [curs, setCurs]= useState({
        creator:'',
        title:'',
        message:'',
        selectedFile:''
    })
        const handl=(e)=>{
           

            setCurs({...curs,[e.target.id]:e.target.value})

        }
        const handlp=(e)=>{
           

            setFile(e.target.files[0])
            setCurs({...curs,
                selectedFile: [...curs.selectedFile, file]})

        }
        const sub=(e) =>{
            e.preventDefault()
          
            const formData= new FormData();

            
            formData.append('curs',curs)
        
            
          dispatch(createpost(curs))

        }

const submit =(e) =>{

    e.preventDefault()
    fetch('http://localhost:8000/create',{
        method: "POST",
        headers:{
            "Accept" : "application/json",
            "Content-Type":"application/json",
          
        },
        body: JSON.stringify(curs)
    })
    
    .then(res=>console.log(res))
    .catch(err=> console.error(err))
   

}

//selectedFile


    return (
        <div className="container">
      <form onSubmit={sub} encType="multipart/form-data" style={{marginTop:"30px"}} className="ff">

         
          
        <label style={{marginInline:"10px",marginBottom:"8px"}}  htmlFor="">Name of Creator</label>
        <input onChange={handl} id='creator' type="text" className="form-control" />
        
        <label style={{marginInline:"10px",marginBottom:"8px"}}  htmlFor="">Title</label>
        <input onChange={handl} id='title' type="text" className="form-control" />

        <label style={{marginInline:"10px",marginBottom:"8px"}} htmlFor="">Description</label>
       <textarea onChange={handl} id='message' style={{marginInline:"17px"}}  name=""  cols="30" rows="5"></textarea>
        <br/>
        <label style={{marginInline:"10px",marginBottom:"8px"}} htmlFor="">Image</label>

        <input  type="file"
            filename="selectedFile"
            onChange={handlp}
        />
<br/><br/>
        <button type="submit" className="btn btn-block btn-black">Create Post</button>

      </form>
        </div>
    )
}





