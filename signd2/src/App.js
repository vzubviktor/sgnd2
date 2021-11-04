import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/main/Main';




function App() {
  
 
 
  return (

    <BrowserRouter>
      
          <Route path = '/' component = {Main} />
        
    </BrowserRouter>

  )
 

}

export default App;
