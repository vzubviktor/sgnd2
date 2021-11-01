import './main.css' ;
import {useDispatch, useSelector} from 'react-redux';
import Repo from '../repo/Repo'
import React, { useState, useEffect } from 'react';
import { fetchRepos, fetchUser } from './actions/api';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { setCurrentPage } from '../../reducers/reposReducers';




const Main  = () =>{
    const dispatch = useDispatch();
    const reposFetching  = useSelector(state => state.repos.isFetching);
    const repos = useSelector(state => state.repos.items);
    const currentPage = useSelector( state => state.repos.currentPage);
    const perPage = useSelector( state => state.repos.perPage);
    const repoNum = useSelector(state => state.repos.repoNum );
    const [username, setUsername] = useState('');

    const pages = [1,2,3,4,5]

    // useEffect(() =>{
    //     dispatch(fetchRepos(username, currentPage))
    // }, [currentPage])
    

   

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        dispatch(setCurrentPage(1))
        const userResult = await fetchUser(username);
        dispatch(userResult);
        const repoResult = await fetchRepos(username, 1)
        dispatch(repoResult);
      
    }


    const handlePage  = async (page) =>{
        dispatch(setCurrentPage(page));
        const repoResult = await fetchRepos(username, page)
        dispatch(repoResult);

    }

    return (
        <div>
            <div className ='search'>
                <input type = 'text' className = 'search input' value = {username } onChange = {e => setUsername(e.target.value)}></input>
                <button className = 'search-btn' onClick = {handleSubmit}>{reposFetching? 'searching' : 'search'}</button>
            </div>
           
            <div>
                <h2>
                    {repoNum === 0 || reposFetching? ' ' : repoNum+ ' Repos are found'  } 
                </h2>
            </div>
           
            {
                reposFetching?
                <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                      :
                repos.map((repo) =>{
                    
                    return <Repo repo = {repo} key = {repo.id} /> 
                })
            }

            <div className = 'pages'>
                {pages.map((page, index) => <span 
                key = {index}
                className = {currentPage == page? 'current-page' : 'page'}
                onClick = {() => handlePage(page)}>{page}</span>)}
            </div>
            
            
        </div>

    
    )
}

export default Main;