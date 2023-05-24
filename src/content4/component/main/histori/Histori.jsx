import React from "react";
import "./histori.css";
const AcorDeon = () => {
	return (
		<div
			id="bGg"
			className="h-full border-y-[4px] border-solid border-black bg-cover bg-fixed  flex items-center flex-col"
		>
			<h2 className="inline-block my-16">"Історія Батурина"</h2>
			<div className="flex flex-col md:flex-row w-full mb-10 md:space-x-8  h-full items-center justify-around">
				<div className="md:w-1/2 lg:ml-10  md:mb-0">
					<div>
						<img
							src="https://umoloda.kyiv.ua/img/content/i152/152961.jpg"
							alt="Кам'янець-Подільський"
						/>
					</div>
				</div>
				<div className="w-full  md:w-1/2">
					<div className="backdrop-blur-[120px] text-white p-10 ">
						Батурин  в XVII столітті, під час правління
						гетьмана Івана Мазепи, Батурин став столицею Київського козацького
						гетьманату. Протягом цього періоду Батурин був важливим політичним
						та культурним центром України. Гетьман Мазепа розбудував резиденцію
						у Батурині, включаючи палац, сади та інші архітектурні споруди.
					</div>
				</div>
			</div>
		</div>
	);
};
export default AcorDeon;
