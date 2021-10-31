import axios from 'axios';
import { setRepos, setReposFetching } from '../../../reducers/reposReducers';
import { setUser, setRepoNum } from '../../../reducers/userReducer';




export const fetchUser =  (username) => {
    return async (dispatch) =>{
      try{
         
        const response  = await axios.get(`https://api.github.com/users/${username}`);
        if(response.data){
          dispatch(setUser(response.data));
          dispatch(setRepoNum(response.data.public_repos))
        }
        else{
         

        }
      }

      catch (err){
        console.log(err)
        dispatch(setUser(''));
        dispatch((setRepoNum(0)));

      }
    

   
  }
    
  };

export const fetchRepos = (username) => {
    return async (dispatch)  =>{
      try{
        
        dispatch(setReposFetching(true));
        const response = await  axios.get(`https://api.github.com/users/${username}/repos?page=1&per_page=30`)
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