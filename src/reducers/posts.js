
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
         //   return posts.post.filter((post)=> post._id != action.payload);

           
        default:
            return posts    
    }


}

export default reducer;