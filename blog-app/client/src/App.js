import './App.css';
import Header from './component/header/Header';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AddBlog from './pages/addBlog/AddBlog';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-blog' element={<AddBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;