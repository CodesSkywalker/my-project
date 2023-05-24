const Header = () => {
	return (
		<>
			<div className="w-full bg-cover h-full object-cover">
				<video
					className="w-full h-full min-w-full max-w-none"
					src="/public/video/video2.mp4"
					autoPlay
					muted
					loop
				></video>
			</div>
		</>
	);
};

export default Header;
