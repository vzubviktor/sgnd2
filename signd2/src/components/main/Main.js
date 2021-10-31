import { useDispatch } from 'react-redux';
import './main.css' ;
import {useDispatch, useSelector} from 'react-redux';


const Main  = () =>{
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items)

    return (
        <div>
            {repos.map = ((repos) =>{
                <Repo repo = {repo} />
            })}
        </div>

    
    )
}