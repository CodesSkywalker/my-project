const Header = () => {
	return (
		<>
			<div className="w-full bg-cover h-full object-cover">
				<h2 className="absolute text-white top-10 md:top-[5%] md:left-[25%] p-6 md:p-16 lg:text-3xl text-[20px] inline-block  backdrop-blur-[5px] rounded-[20px]  w-full md:w-1/2">
					Кам'янець-Подільський - одне з найстаріших міст в Україні, засноване
					більше 1000 років тому.
				</h2>
				<video
					className="w-full h-full "
					src="/public/video/video.mp4"
					autoPlay
					muted
					loop
				></video>
			</div>

			{/* 			
			<div className="w-full h-[93.1vh]">
				<h2 className="absolute text-white top-[5%] md:left-[25%] p-6 md:p-16 lg:text-3xl text-[20px] inline-block  backdrop-blur-[5px] rounded-[20px]  w-full md:w-1/2">
					Кам'янець-Подільський - одне з найстаріших міст в Україні, засноване
					більше 1000 років тому.
				</h2>
				<video
					className="w-full max-w-none h-full object-cover"
					src="/public/video/video.mp4"
					autoPlay
					muted
					loop
				></video>
			</div> */}
		</>
	);
};

export default Header;
