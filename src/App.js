import './App.css';
import Shops from './components/Shop/Shops';
import Home from './Home/Home';
import TopNavbar from '../src/components/TopNavbar/TopNavbar';
import MainNavbar from '../src/components/MainNavbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
        <Router>
          <TopNavbar />
          <MainNavbar />
          <Routes>
              <Route excat path="/" element={<Home/>} />
              <Route excat path="/shops" element={<Shops/>} />
          </Routes>
        </Router>
    </>
  )
}

export default App;
