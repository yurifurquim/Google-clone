import './App.css';
import Home from './Components/Home'
import SearchPage from "./pages/SearchPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="search" element={<SearchPage />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

