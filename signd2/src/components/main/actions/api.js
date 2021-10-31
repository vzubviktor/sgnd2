import axios from 'axios';
import { setRepos } from '../../../reducers/reposReducers';

export const fetchUser =  (username) => {
    return axios.get(`https://api.github.com/users/${username}`)
    .catch(function (error) {
      console.log(error);
    })
  };

export const fetchRepos = (username) => {
    return async (dispatch)  =>{
        const response = await  axios.get(`https://api.github.com/users/${username}/repos?page=1&per_page=30`)
        dispatch(setRepos(response.data))
       
          

      
  }
}