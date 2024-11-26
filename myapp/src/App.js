import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Link,navLink, Route} from 'react-router-dom';
import Home from './components/Home'
import Contactus from './components/Contactus'
import Aboutus from './components/Aboutus'
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div className="App">  
    <Router>
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/aboutus'>Aboutus</Link></li>
          <li><Link to='/contactus'>Contactus</Link></li>

        </ul>
      </nav>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Contactus' element={<Contactus/>}/>

        </Routes>
    </Router>
   
     </div>
    
  );
}

export default App;

