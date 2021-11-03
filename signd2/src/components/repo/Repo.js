import React from "react";
import './Repo.css';


const Repo = (props) =>{
    const repo = props.repo
    const {name, id, html_url, description } = repo
  

    return (
        <div className = 'card' key = {id}>
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <a href ={html_url} className="btn btn btn-success">go to repository</a>

            </div>
        </div>


    )
}

export default Repo;

