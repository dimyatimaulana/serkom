// import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Daftar from "./pages/Daftar";
import Hasil from "./pages/Hasil";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/hasil" element={<Hasil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
