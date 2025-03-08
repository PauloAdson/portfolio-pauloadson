import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import { Contato } from "./pages/Contato/Contato";
// import { Obrigado } from "./pages/Obrigado/Obrigado";
import ScrollToHash from "./components/ScrollToHash/ScrollToHash";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToHash />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contato />} />
          {/* <Route path="/obrigado" element={<Obrigado />} /> */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
