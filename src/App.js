import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import WantHelp from './components/WantHelp';
import Footers from './components/Footers';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <WantHelp />
      <Footers />
    </div>
  );
}

export default App;
