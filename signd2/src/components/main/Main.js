import './main.css' ;
import {useDispatch, useSelector} from 'react-redux';
import Repo from '../repo/Repo'
import Org from '../org/Org';
import React, { useState, useEffect } from 'react';
import { fetchRepos, fetchUser, fetchOrgs } from './actions/api';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { setCurrentPage } from '../../reducers/reposReducers';
import { createPages } from './createPages';




const Main  = () =>{
    const dispatch = useDispatch();
    const user = useSelector(state => state.repos.user )
    const reposFetching  = useSelector(state => state.repos.isFetching);
    const repos = useSelector(state => state.repos.items);
    const orgs = useSelector(state =>state.repos.orgs)
    const currentPage = useSelector( state => state.repos.currentPage);
    const perPage = useSelector( state => state.repos.perPage);
    const repoNum = useSelector(state => state.repos.repoNum );
    const [username, setUsername] = useState('');
    const pagesCount = Math.ceil(repoNum/perPage);
    const pages = []
    createPages(pages, pagesCount, currentPage);

    

    

   

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        dispatch(setCurrentPage(1))
        const userResult = await fetchUser(username);
        dispatch(userResult);
        const repoResult = await fetchRepos(username, 1, perPage)
        dispatch(repoResult);
        const orgResult = await fetchOrgs(username);
        dispatch(orgResult);
      
    }


    const handlePage  = async (page) =>{
        dispatch(setCurrentPage(page));
        const repoResult = await fetchRepos(username, page, perPage)
        dispatch(repoResult);

    }

    return (
            <div>
                <div className ='search'>
                    <input type = 'text' className = 'search input' value = {username } onChange = {e => setUsername(e.target.value)}></input>
                    <button className = 'search-btn' onClick = {handleSubmit}>{reposFetching? 'searching' : 'search'}</button>
                </div>
                {reposFetching
                            ? 
                    <div className = 'spinner'>
                        <Loader type="TailSpin" color="#00BFFF" height={200} width={200} />
                    </div>
                        :
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>{user === ''? '' : repoNum+ ' Repos are found'  }</h2>
                                {repos.map((repo) =>{return <Repo repo = {repo} key = {repo.id} />})}
                            </div>
                            <div className ="col">
                                <h2>{user === ''? '' : orgs.length + ' Orgs are found'  }</h2>
                                {orgs.map((org) =>{return <Org org = {org} key = {org.id} />})}
                            </div>
                            <div className = 'pages'>
                                {pages.map((page, index) => <span 
                                key = {index}
                                className = {currentPage == page? 'current-page' : 'page'}
                                onClick = {() => handlePage(page)}>{page}</span>)}
                            </div>
                        </div>
                    </div>
                }
            </div>
           )
}
    
export default Main;