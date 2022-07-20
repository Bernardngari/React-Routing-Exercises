import './App.css';
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import About from '../about/About';
import Home from '../home/Home';
import {BrowserRouter as Router, Routes,Route, NavLink} from "react-router-dom";


function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Contact/>
    <About/>
   </div>
  );
}

function MainApp(){
return(
  <Router>
        <div className="topNavBar">
            <NavLink className="" to="/">Home</NavLink>.
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
<Routes>
<Route path='/' element={<Home />}/>
<Route path='/contact' element={<Contact />}/>
<Route />
</Routes>


  </Router>

)

}



export default App;
export {MainApp};
