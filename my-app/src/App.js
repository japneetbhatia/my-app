import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate  } from "react-router-dom";
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
                {/* <About />
              </Route> */}
              <Route exact path="/resume" element={<Resume/>} />
                {/* <Resume />
              </Route> */}
              <Route exact path="/projects" element={<Project/>} />
                {/* <Project />
              </Route> */}
              {/* <Route>
                <Navigate to="/home" />
              </Route> */}
            </Routes>
            
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
