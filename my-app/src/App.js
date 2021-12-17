import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from "./Components/Navbar"

function App() {
  return (
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
  );
}

export default App;
