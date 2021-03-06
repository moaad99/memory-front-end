
import {createPost, updatepost} from '../api'
import {fetchpost,deletepost} from '../api'
import toastr from 'toastr';
import "toastr/build/toastr.css";

export const getPost=() => async(dispatch) =>{

    try {
        const {data} = await fetchpost();

        dispatch({type : 'FETCH_ALL',payload:data})


    } catch (error) {
        console.log(error)
        
    }

}

export const createpost=(post) => async(dispatch) =>{

    try {
        const {data} = await createPost(post);

        dispatch({type : 'CREATE',payload:data})
        toastr.success('Post Created succecfully', 'Congratulation')


    } catch (error) {
        console.log(error)
        toastr.warning('Post not Created ', 'Erreur')
        
    }

}

export const deletePost=(id) => async(dispatch)=>{


    try{
        await deletepost(id)

        dispatch({type:'DELETE',payload:id})
    } catch (error) {
        console.log(error)
        
    }
}

export const updatePost =(id,post) => async(dispatch)=>{


    try {
        
        const {data} = await updatepost(id,post)

        dispatch({
            type: 'UPDATE',
            payload:data
        })

    } catch (error) {
        console.log(error)

    }

}