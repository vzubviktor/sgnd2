import { useState } from "react";
import { fetchOrgs, fetchUser, fetchRepos } from "../actions/api";
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentPage, setRepos,  setReposFetching, setOrgs } from '../../../reducers/reposReducers';




const Search =({ reposFetching}) =>{
    
    const perPage = useSelector( state => state.repos.perPage);

    const dispatch = useDispatch();

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        dispatch(setCurrentPage(1))
        dispatch(setReposFetching(true))
        const userResult = await fetchUser(username);
        dispatch(userResult);
        const repoResult = await fetchRepos(username, 1, perPage)
        dispatch(setRepos(repoResult));
        const orgResult = await fetchOrgs(username);
        dispatch(setOrgs(orgResult));
      
    }

    const [username, setUsername] = useState('');

    return  <nav className="navbar navbar-light bg-warning">
  <form className="container-fluid">
  <a class="navbar-brand" href="https://github.com">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" width="24" height="24" class="d-inline-block align-text-top"></img>
      GitHub Search 
    </a>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">@</span>
      <input className="form-control" value = {username } onChange = {e => setUsername(e.target.value)} type="search" placeholder="GitHub username" aria-label="Search" aria-label="Username" aria-describedby="basic-addon1"></input>
    <button className="btn btn-outline-success" onClick = {handleSubmit} type="submit">{reposFetching? 'searching' : 'Search'}</button>
    </div>
  </form>
</nav>
};

export default Search;