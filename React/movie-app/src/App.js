import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Movie from "./components/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
