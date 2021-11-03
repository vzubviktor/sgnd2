import axios from "axios";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {fetchOrgs, fetchRepos, fetchUser} from './api.js';
import {repoMock, repoOwnerName, orgName, orgMemberName,  orgMock} from './mock.js'





beforeEach(() => {
   
})

test( 'testing GitHub api to extract User repos', async () =>{
  
    const data = await fetchRepos(repoOwnerName);
    expect (data.length).toBeGreaterThanOrEqual( repoMock.length)
    const randomNum = Math.floor(Math.random() * data.length);
    expect (data[randomNum].owner.login).toBe(repoOwnerName);

})

test(' testing GitHub API to extarct user repositories', async() =>{
    
    const data = await fetchOrgs(orgMemberName);
    expect (data.length).toBeGreaterThanOrEqual( orgMock.length);
    const randomNum = Math.floor(Math.random() * data.length);
    expect (data[randomNum].login).toBe(orgName);
 })

 test(' test that Github Api returns correct JSON shape and values ', async () =>{
    
    
    const userData = await axios.get(`https://api.github.com/users/${repoOwnerName}`);
    const repoData = await fetchRepos(repoOwnerName);
    expect (userData.data.login).toBe(repoOwnerName)
    expect (userData.data.public_repos).toBeGreaterThanOrEqual(0)
    expect (userData.data.public_repos).toBe(repoData.length)


})
