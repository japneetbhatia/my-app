import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Components/About';
import Resume from './Components/Resume';
import Project from './Components/Project';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="seperate"></div>        
        <div className="content">
          <Navbar />
            <Routes>
              <Route exact path="/home" element={<About/>} />
              <Route exact path="/resume" element={<Resume/>} />
              <Route exact path="/projects" element={<Project/>} />
            </Routes>            
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
