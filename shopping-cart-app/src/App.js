
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import './App.css';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
