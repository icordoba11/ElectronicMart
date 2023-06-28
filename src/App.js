import react, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Kids from "./pages/Kids";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Kids" element={<Kids />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
