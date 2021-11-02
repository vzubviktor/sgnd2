import axios from "axios";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {fetchOrgs, fetchRepos, fetchUser} from './api.js';
import {repoMock, repoOwnerName, orgName, orgMemberName,  orgMock} from './mock.js'





beforeEach(() => {jest.setTimeout(100000)
   
})

test( 'testing GitHub api to extract User repos', async () =>{
    jest.setTimeout(100000)
    const data = await fetchRepos(repoOwnerName);
    console.log(data);
    expect (data.length).toBeGreaterThanOrEqual( repoMock.length)
    const randomNum = Math.floor(Math.random() * data.length);
    expect (data[randomNum].owner.login).toBe(repoOwnerName);

})

test(' testing GitHub API to extarct user repositories', async() =>{
    jest.setTimeout(100000)
    const data = await fetchOrgs(orgMemberName);
    console.log(data);
    expect (data.length).toBeGreaterThanOrEqual( orgMock.length);
    const randomNum = Math.floor(Math.random() * data.length);
    expect (data[randomNum].login).toBe(orgName);
 })

 test(' test that Github Api returns correct JSON shape and values ', async () =>{
    jest.setTimeout(100000)
    
    const userData = await axios.get(`https://api.github.com/users/${repoOwnerName}`);
    const {login, id, public_repos} = userData;
    const repoData = await fetchRepos(repoOwnerName);
    expect (login).toBe(true)
    expect (id).toBe(true)
    expect (public_repos).toBeGreaterThanOrEqual(0)
    expect (public_repos).toBe(repoData.length)


})
