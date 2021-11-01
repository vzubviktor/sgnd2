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
          dispatch(setUser(''));
          }
      }

      catch (err){
        console.log(err)
        dispatch(setUser(''));
        dispatch((setRepoNum(0)));

      }
   }
 };




export const fetchRepos = (username, page, perPage) => {
    return async (dispatch)  =>{
      try{
        dispatch(setReposFetching(true));
        const response = await  axios.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`)
        if(response.data){
         dispatch(setRepos(response.data));
        }
        else{
          dispatch(setRepos([]))  
        }
       }
      catch(err) {
        console.log(err);
        dispatch(setReposFetching(false));
        dispatch(setRepos([]));
      }
    }
}


export const fetchOrgs =  (username) => {
  return async (dispatch) =>{
    try{
       
      const response  = await axios.get(`https://api.github.com/users/${username}/orgs`);
      if(response.data){
        dispatch(setOrgs(response.data));
         }
      else{
        dispatch(setOrgs([]));
        }
    }

    catch (err){
      console.log(err)
      dispatch(setOrgs([]));
    }
 }
};