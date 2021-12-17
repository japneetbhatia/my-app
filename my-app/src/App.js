import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

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
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
