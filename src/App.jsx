import "./App.css";
// import main from './assets/main image.png'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Click from "./pages/click";
import { useState } from "react";
import Navbar from "./layouts/Navbar";
import ExplainUseState from "./pages/ExplainUseState";
import List from "./pages/List";
// import { Form } from 'react-bootstrap'
import Form from "./pages/Form";
import Fetch from "./pages/Fetch";
import Reexplain from "./pages/Reexplain";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [products] = useState("shoe");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home products={products} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Form" element={<Form stan={products} />} />
          <Route path="/Click" element={<Click />} />
          <Route path="/Fetch" element={<Fetch />} />

        </Routes>
      </BrowserRouter>
      {/* <Home products = {products}/> */}

      {/* <Contact/>
    <Click/>
    <ExplainUseState/>
    <List/>
    <Hide/>
    <Reexplain/>
    <Form stan = {products}/> */}

      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore ipsam aliquam magni sit quaerat reprehenderit ipsum expedita atque ab, qui reiciendis nemo quod, itaque eligendi incidunt necessitatibus nesciunt voluptates!</p> */}
    </>
  );
}

export default App;
