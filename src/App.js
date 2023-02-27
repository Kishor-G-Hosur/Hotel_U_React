
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Itemes from './components/items';
import Footer from './components/footer';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Itemes/>
      <Footer/>
    </div>
  );
}
export default App;
