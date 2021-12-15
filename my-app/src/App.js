import './App.css';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="seperate"></div>        
        <div className="content"></div>
      </div>
    </div>
  );
}

export default App;
