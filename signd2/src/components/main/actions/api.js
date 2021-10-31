import axios from 'axios';
import { setRepos, setReposFetching } from '../../../reducers/reposReducers';
import { setUser } from '../../../reducers/userReducer';
import { useDispatch } from 'react-redux';




export const fetchUser =  (username) => {
    return async (dispatch) =>{ 
      const response  = await axios.get(`https://api.github.com/users/${username}`);
    dispatch(setUser(response.data));
   
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