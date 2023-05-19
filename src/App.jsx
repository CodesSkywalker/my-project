import { Route, Routes, Link } from "react-router-dom";
import Nav from "./navbar/Navbar";
import Site1 from "./content/site1.jsx";
import Site2 from "./content2/site2.jsx";
// import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./footer/Footer"
function App() {
	return (
		<div>
		
				<Nav />
				<Routes>
					<Route path="/" element={<Site1 />} />
					<Route path="/site2" element={<Site2 />} />
				</Routes>
				<Footer/>
		
		</div>
	);
}

export default App;
