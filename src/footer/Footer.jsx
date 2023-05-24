import { Footer } from "flowbite-react";
import { AiFillGithub } from 'react-icons/ai';

const Fot = () => {
	return (
		<>
			<div className="w-full flex md:justify-between px-3 justify-around text-center py-3 border-t-2 mt-1 border-black ">
				<Footer.Copyright by="Logo™" year={2023} />


				<a href="https://github.com/CodesSkywalker/my-project" target="_blank">
					
				<AiFillGithub size={34}/>
				</a>
			</div>
		</>
	);
};
export default Fot;
