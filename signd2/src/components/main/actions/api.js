import axios from 'axios';
import {  setRepoNum, setUser} from '../../../reducers/reposReducers';


//  fetching user info, number of repositories 

export const fetchUser =  (username) => {
    return async (dispatch) =>{
      try{
         
        const response  = await axios.get(`https://api.github.com/users/${username}`);
        if(response.data){
          dispatch(setUser(response.data));
          dispatch(setRepoNum(response.data.public_repos))
        }
        else{
          dispatch(setUser('username not found'));
          }
      }

      catch (err){
        console.log(err)
        dispatch(setUser('user not found'));
        dispatch((setRepoNum(0)));

      }
   }
 };


//  fetches repositories 

export const fetchRepos = async (username, page = 1, perPage ) => {
    
      try{
       
        const response = await  axios.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`)
        if(response.data){
         return response.data ;
        }

      }
      catch(err) {
        console.log(err);
        return []
      }
    
}

//  fetches organizations 
export const fetchOrgs = async (username) => {
  
    try{
      const response  = await axios.get(`https://api.github.com/users/${username}/orgs?page=1&per_page=100`);
      if(response.data){
        return(response.data)
      }
    }
    catch (err){
      console.log(err)
      return []
      }
 }
