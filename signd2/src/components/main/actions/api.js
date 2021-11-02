import axios from 'axios';
import { setRepos, setReposFetching, setRepoNum, setUser, setOrgs } from '../../../reducers/reposReducers';




export const fetchUser =  (username) => {
    return async (dispatch) =>{
      try{
         
        const response  = await axios.get(`https://api.github.com/users/${username}`);
        if(response.data){
          dispatch(setUser(response.data));
          dispatch(setRepoNum(response.data.public_repos))
        }
        else{
          dispatch(setUser('user not found'));
          }
      }

      catch (err){
        console.log(err)
        dispatch(setUser('user not found'));
        dispatch((setRepoNum(0)));

      }
   }
 };




export const fetchRepos = async (username, page, perPage) => {
    
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


export const fetchOrgs = async (username) => {
  
    try{
      const response  = await axios.get(`https://api.github.com/users/${username}/orgs`);
      if(response.data){
        return(response.data)
      }
    }
    catch (err){
      console.log(err)
      return []
      }
 }
