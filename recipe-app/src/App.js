import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import Favourites from "./pages/favorites";
import Detail from "./pages/details";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 py-2 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
