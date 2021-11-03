import './main.css' ;
import {useDispatch, useSelector} from 'react-redux';
import Repo from '../repo/Repo'
import Org from '../org/Org';
import React, { useState,  } from 'react';
import { fetchRepos, fetchUser, fetchOrgs } from './actions/api';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { setCurrentPage, setRepos,  setReposFetching, setOrgs } from '../../reducers/reposReducers';
import { createPages } from './createPages';
import Search from './search/Search';




const Main  = () =>{

//  this is our collection of states. Our App rely on these states 

    const dispatch = useDispatch();
    const user = useSelector(state => state.repos.user )
    const reposFetching  = useSelector(state => state.repos.isFetching);
    const repos = useSelector(state => state.repos.items);
    const orgs = useSelector(state =>state.repos.orgs)
    const currentPage = useSelector( state => state.repos.currentPage);
    const perPage = useSelector( state => state.repos.perPage);
    const repoNum = useSelector(state => state.repos.repoNum );
    const pagesCount = Math.ceil(repoNum/perPage);
    const pages = []
    createPages(pages, pagesCount, currentPage); // create pagination
    
    

    
//  function to handle username submit. It pulls up username first,
//  then check number of  repositories and organizations, then makes 
// separate API requests to extract repos and organizations and update the State
   

    


//  Function handles pagination

    const handlePage  = async (page) =>{
        dispatch(setCurrentPage(page));
        dispatch(setReposFetching(true))
        const repoResult = await fetchRepos(user.login, page, perPage)
        dispatch(setRepos(repoResult));

    }




//  This block displays final output. Conditional rendering takes place 

    return (
            <>
            <div className="content">
                  <Search reposFetching = {reposFetching} /> 
            
           
                <h1>
                    {user == 'username not found' && !reposFetching? user : ''}
                </h1>
                {reposFetching
                            ? 
                    <div className = 'spinner'>
                        <Loader type="TailSpin" color="#198754" height={200} width={200} />
                    </div>
            
                    
                            :
                    <div className="container centered">
                        <div className="row">
                            <div className="col">
                                <h2>{user === '' || user === 'username not found' ? '' : 'Repositories    ' + repoNum  }</h2>
                                {repos.map((repo) =>{return <Repo repo = {repo} key = {repo.id} />})}
                            </div>
                            <div className ="col">
                                <h2>{user === '' || user === 'username not found' ? '' : 'Organizations  ' + orgs.length  }</h2>
                                {orgs.map((org) =>{return <Org org = {org} key = {org.id} />})}
                            </div>
                           
                        </div>
                    </div>
                }
                 <div className = 'pages'>
                                {pages.map((page, index) => <span 
                                key = {index}
                                className = {currentPage == page? 'current-page' : 'page'}
                                onClick = {() => handlePage(page)}>{page}</span>)}
                            </div>
                            </div>
                <div class="footer bg-warning">
                    <div className="container">
                        <div className="row centered">
                            <a href="mailto:vzubviktor@gmail.com"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                            </svg></a>
                            <a href="https://linkedin.com/vzubviktor"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/>
                            <path d="M13.784 14c-.497-1.27-1.988-3-5.784-3s-5.287 1.73-5.784 3h11.568z"/>
                            <path fill-rule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg></a>
                        </div>
                    </div>
                </div>
            </>
           )
}
    
export default Main;