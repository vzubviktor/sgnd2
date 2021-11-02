import React from "react";
import './Repo.css';


const Repo = (props) =>{
    const repo = props.repo
    const {name, id, html_url, description } = repo
  

    return (
        <div className = 'repo' key = {id}>
            <p>{name}</p>
            <p>{description}</p>
            <p><a href ={html_url}>go to repository</a></p>


        </div>


    )
}

export default Repo;

