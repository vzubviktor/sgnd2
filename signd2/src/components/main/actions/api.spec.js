import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {fetchOrgs, fetchRepos, fetchUser} from './api.js';
import {repoMock, repoOwnerName} from './mock.js'
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";





beforeEach(() => {

})

test( 'testing repos api', async () =>{
    const response = await axios.get(`https://api.github.com/users/${repoOwnerName}/repos`)
    console.log(response);
    expect (response.data.length).toBeGreaterThanOrEqual( repoMock.length)
    const randomNum = Math.floor(Math.random() * response.data.length);
    expect (response.data[randomNum].owner.login).toBe(repoOwnerName);

})