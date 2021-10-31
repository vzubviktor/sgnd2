import './main.css' ;
import {useDispatch, useSelector} from 'react-redux';
import Repo from '../repo/Repo'
import React, { useState } from 'react';
import { fetchRepos, fetchUses } from './actions/api';



const Main  = () =>{
    const dispatch = useDispatch();
    const reposFetching  = useSelector(state => state.repos.isFetching);
    const repos = useSelector(state => state.repos.items)
    const [username, setUsername] = useState('')
    

   

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
       dispatch(fetchRepos(username))
    }

    return (
        <div>
            <div className ='search'>
                <input type = 'text' className = 'search input' value = {username } onChange = {e => setUsername(e.target.value)}></input>
                <button className = 'search-btn' onClick = {handleSubmit}>Seacrh</button>
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