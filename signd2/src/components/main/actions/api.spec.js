import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {fetchOrgs, fetchRepos, fetchUser} from './api.js';
import {repoMock, repoOwnerName, orgName, orgMemberName, orgMock} from './mock.js'





beforeEach(() => {

})

test( 'testing GitHub api to extract User repos', async () =>{
    const data = await fetchRepos(repoOwnerName);
    console.log(data);
    expect (data.length).toBeGreaterThanOrEqual( repoMock.length)
    const randomNum = Math.floor(Math.random() * data.length);
    expect (data[randomNum].owner.login).toBe(repoOwnerName);

})

test(' testing GitHub API to extarct user repositories', async() =>{
    const data = await fetchOrgs(orgMemberName);
    console.log(data);
    expect (data.length).toBeGreaterThanOrEqual( orgMock.length);
    const randomNum = Math.floor(Math.random() * data.length);
    expect (data[randomNum].login).toBe(orgName);


})