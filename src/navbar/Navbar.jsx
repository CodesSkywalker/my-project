import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<>
			<Navbar className="border-none flex justify-between  m-auto sticky top-0 left-0 z-10">
				<Navbar.Brand>
					
					<span className="self-center whitespace-nowrap text-red-700 text-2xl font-bold dark:text-white">
						Logo
					</span>
				</Navbar.Brand>
				<Navbar.Toggle />
                <Navbar.Collapse>
                
				<Link className="inline-block text-center md:border-none border-b-2 border-solid text-lg font-bold text-gray-500 hover:text-black" to="/">Кам'янець-Подільськ</Link>
				<Link className="inline-block text-center md:border-none border-b-2 border-solid text-lg font-bold text-gray-500 hover:text-black"  to="/site2">Хортиця</Link>
                
                </Navbar.Collapse>
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
