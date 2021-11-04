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
import Footer from '../footer/Footer';




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
                                <div className = 'pages'>
                                    {pages.map((page, index) => <span 
                                    key = {index}
                                    className = {currentPage == page? 'current-page' : 'page'}
                                    onClick = {() => handlePage(page)}>{page}</span>)}
                                </div>
                            </div>
                            <div className ="col">
                                <h2>{user === '' || user === 'username not found' ? '' : 'Organizations  ' + orgs.length  }</h2>
                                {orgs.map((org) =>{return <Org org = {org} key = {org.id} />})}
                            </div>
                        </div>
                    </div>
                }
                
            </div>
                <Footer />
                
            </>
           )
}
    
export default Main;