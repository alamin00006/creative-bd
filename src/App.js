import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import TopNavbar from './components/Navbar/TopNavbar';


function App() {
  return (
    <div>
       <TopNavbar/>
       <Navbar/>
       <Home/>
    </div>
  );
}

export default App;
