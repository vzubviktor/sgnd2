import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/main/Main';




function App() {
  const dispatch = useDispatch()
 
 
  return (

    <BrowserRouter>
      <div className = 'container'>
          <Route path = '/' component = {Main} />
        </div>
    </BrowserRouter>

  )
 

}

export default App;
