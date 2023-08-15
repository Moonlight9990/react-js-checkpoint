import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Cards.js';
import Navbar from './components/Navbars.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
    </div>
  );
}

export default App;
