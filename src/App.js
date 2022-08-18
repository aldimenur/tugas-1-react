import "./App.css";
import NavbarComponent from "./components/layouts/Navbar";
import Gallery from "./pages/Gallery";
import Posts from "./pages/Posts";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
