import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./navbar/Navbar";
import Site1 from "./content/site1.jsx";
import Site2 from "./content2/site2.jsx";
import Site3 from "./content3/site3.jsx";
import Site4 from "./content4/site4.jsx";
import Site5 from "./content5/site5.jsx";
import Site6 from "./content6/site6.jsx";
import Site7 from "./content7/site7.jsx";
import Body from "./Body/Body";
import MyComponent from "./loader/Loader";
import Footer from "./footer/Footer";

function App() {
  return (
    <ChakraProvider>
      <div className="overflow-x-hidden">
        
        <Nav />
		<div className="mt-16">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/site1" element={<Site1 />} />
          <Route path="/site2" element={<Site2 />} />
          <Route path="/site3" element={<Site3 />} />
          <Route path="/site4" element={<Site4 />} />
          <Route path="/site5" element={<Site5 />} />
          <Route path="/site6" element={<Site6 />} />
          <Route path="/site7" element={<Site7 />} />
        </Routes>
        </div>
        
		
		
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
