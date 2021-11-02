import React from "react";
import './Org.css';


const Org = (props) =>{
    const org = props.org
    const {id, login, url, avatar_url, description} = org
  

    return (
        <div className = 'org' key = {id}>
            <img src={avatar_url} alt="Girl in a jacket" width="60" height="50"/> 
            <p>{login}</p>
            <p>{description}</p>
            <p><a href = {url}>go to organization</a></p>

        </div>


    )
}

export default Org;
