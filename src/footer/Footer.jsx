import {Footer} from 'flowbite-react'


const Fot = () => {
	return (
		<>
			<Footer container={true}>
				<div className="w-full text-center">
					
					<Footer.Divider />
					<Footer.Copyright href="#" by="Logo™" year={2023} />
				</div>
			</Footer>
		</>
	);
};

export default Fot;
