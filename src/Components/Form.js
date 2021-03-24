import React , {useState} from 'react'

import {useDispatch} from 'react-redux'

import {createpost} from '../Actions/postAction'

export default function Form() {

    const dispatch = useDispatch()
    const [curs, setCurs]= useState({

        creator:'',
        title:'',
        message:''
    })
        const handl=(e)=>{
           

            setCurs({...curs,[e.target.id]:e.target.value})

        }
        const sub  =(e) =>{
            e.preventDefault()
          dispatch(createpost(curs))

        }

 /*       useEffect(() => {
            
        }, [input])*/
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




    return (
        <div className="container">
      <form onSubmit={sub} style={{marginTop:"30px"}} className="ff">

         
          
        <label style={{marginInline:"10px",marginBottom:"8px"}}  htmlFor="">Name of Creator</label>
        <input onChange={handl} id='creator' type="text" className="form-control" />
        
        <label style={{marginInline:"10px",marginBottom:"8px"}}  htmlFor="">Title</label>
        <input onChange={handl} id='title' type="text" className="form-control" />

        <label style={{marginInline:"10px",marginBottom:"8px"}} htmlFor="">Description</label>
       <textarea onChange={handl} id='message' style={{marginInline:"17px"}}  name=""  cols="30" rows="5"></textarea>
        <br/>
        <label style={{marginInline:"10px",marginBottom:"8px"}} htmlFor="">Image</label>

        <input type="file"/>
<br/><br/>
        <button type="submit" className="btn btn-block btn-black">Create Post</button>

      </form>
        </div>
    )
}





