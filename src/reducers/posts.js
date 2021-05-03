
const reducer = (posts=[],action) =>{

    switch(action.type){

        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
        
            return { 
                ...posts,
                post: [...posts.post, action.payload.post]
            } 
            
        case 'DELETE': 

        return {
            ...posts,
            post: posts.post.filter((item, index) => item._id !== action.payload)
          }

        case 'UPDATE':
            
        return {
            ...posts,
            post: posts.post.map((pos) => pos._id === action.payload.post._id ? action.payload.post : pos)

        }

           
        default:
            return posts    
    }


}

export default reducer;