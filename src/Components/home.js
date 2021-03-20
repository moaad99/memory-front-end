import React, {useEffect} from 'react'

import {useDispatch} from 'react-redux'


export default function home() {



    useEffect(() => {
        
    }, [])

    const dispatch = useDispatch()
    return (
        <div>
            

            <div className="header">
        <div>
                <h1 >Memory</h1> 
                </div>
                <div className="e">
                    <img src="https://icon-library.com/images/memories-icon/memories-icon-23.jpg" alt=""/>
                </div>
            </div>

        <div className="container">


            <div  className="all">
            <div  className="form">


<h1>FORM</h1>

                </div>

                <div  className="post">
<h1>POST</h1>
<h1>POST</h1>
<h1>POST</h1>
                </div>

               

            </div>

        </div>


        </div>
    )
}
