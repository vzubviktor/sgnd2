import React from "react";
import './Org.css';


const Org = (props) =>{
    const org = props.org
    const {id, login, url, avatar_url, description} = org
  

    return (
        <div className = 'card' key = {id}>
            <img src={avatar_url} className="card-img-top brand-logo" alt="brand logo"/>
            <div className="card-body">
            <h5 className="card-title">{login}</h5>
            <p className="card-text">{description}</p>

            </div>
</div>
    )
}

export default Org;
