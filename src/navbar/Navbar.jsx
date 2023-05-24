import { Navbar } from "flowbite-react";
import  './style.css'
import React from "react";
import Draver from './Draver'
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Nav() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<>
			<Navbar className="border-none flex justify-between fixed z-50  items-center m-auto  w-full  ">
				<Navbar.Brand>
					<Link to="/">
						<span className="self-center whitespace-nowrap text-red-700 text-2xl font-bold dark:text-white">
							Logo
						</span>
					</Link>
				</Navbar.Brand>
				<ion-icon  name="menu" ref={btnRef} size="large"  className=" text-[64px] cursor-pointer" colorScheme="teal" onClick={onOpen}>
					Open
				</ion-icon>
			<Draver onClose={onClose } btnRef={btnRef} isOpen={isOpen}/>
				
			</Navbar>
		</>
	);
}

export default Nav;

// import Nav from "./navbar/Navbar"

// const Nav = () => {
//     return ( <>	<header>
//         <Link to="/">Hello</Link>
//         <Link to="/site2">Hel</Link>
//     </header>
//    </> );
// }

// export default Nav;
