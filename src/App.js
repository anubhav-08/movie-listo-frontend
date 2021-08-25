import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="container">
        <Cards/>
      </div>
    </div>
  );
}

export default App;
