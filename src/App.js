import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


const App = () => {
  return (
    <React.Fragment>
      <div className="">
      <Header />
         <BrowserRouter>
           <Routes>
              <Route path="/" element={<Home/>} />
           </Routes>
         </BrowserRouter>
         <Footer />
      </div>
    </React.Fragment>
  )
}

export default App 