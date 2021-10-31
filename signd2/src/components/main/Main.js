import './main.css' ;
import {useDispatch, useSelector} from 'react-redux';
import Repo from '../repo/Repo'
import React, { useState } from 'react';
import { fetchRepos, fetchUser } from './actions/api';



const Main  = () =>{
    const dispatch = useDispatch();
    const reposFetching  = useSelector(state => state.repos.isFetching);
    const repos = useSelector(state => state.repos.items)
    const [username, setUsername] = useState('')
    const repoNum = useSelector(state => state.repos.repoNum );
    

   

    const handleSubmit = async (e) =>{
        
        e.preventDefault();

        const userResult = await fetchUser(username);
        dispatch(userResult);
        
       const repoRuslt = await fetchRepos(username)
       dispatch(repoRuslt);
      
    }

    return (
        <div>
            <div className ='search'>
                <input type = 'text' className = 'search input' value = {username } onChange = {e => setUsername(e.target.value)}></input>
                <button className = 'search-btn' onClick = {handleSubmit}>{reposFetching? 'searching' : 'search'}</button>
            </div>
            <div>
                <h2>
                    {repoNum === 0? ' ' : repoNum+ ' Repos are found'  } 
                </h2>
            </div>
            {
                reposFetching?
                <h2>fetching</h2>
                      :
                repos.map((repo) =>{
                    
                    return <Repo repo = {repo} /> 
                })
            }
            
            
        </div>

    
    )
}

export default Main;