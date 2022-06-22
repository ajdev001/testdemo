import logo from './logo.svg';
import './App.css';
import Header from './Screen/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Screen/About';
import Home from './Screen/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
