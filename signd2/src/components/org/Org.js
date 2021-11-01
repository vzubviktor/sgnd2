import React from "react";
import './Org.css';


const Org = (props) =>{
    const org = props.org
  

    return (
        <div className = 'org' key = {org.id}>
            {org.login}

        </div>


    )
}

export default Org;
