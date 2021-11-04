import React from "react";


const Org = (props) =>{
    const org = props.org
    const {id, login,  avatar_url, description} = org
  

    return (
        <div className="card mb-3" key = {id}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={avatar_url} style={{maxWidth:'120px'}} className="img-fluid rounded-start" alt="brand logo"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Org;
