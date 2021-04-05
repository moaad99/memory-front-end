
import axios from 'axios'

const url = 'http://localhost:8000/add'

export const createPost=(newPost)=> { return axios.post(url,newPost)};

export const fetchpost=()=> { return axios.get('http://localhost:8000/get')};

export const deletepost=(id)=>{ return axios.delete(`http://localhost:8000/delete/${id}`)}