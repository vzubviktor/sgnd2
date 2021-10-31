import React from "react";
import './Repo.css';

const Repo = (props) =>{
    const repo = props.repo
    return (
        <div className = 'repo'>
            {repo.name}

        </div>


    )
}

export default Repo;

