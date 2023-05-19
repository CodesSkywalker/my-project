import React from "react";
import "./histori.css"
const AcorDeon = () => {
	return (
		<div id="bG" className="h-full border-y-[4px] border-solid border-black bg-cover bg-fixed  flex items-center flex-col" >
			<h2 className="inline-block my-16">"Історія Кам'янеця-Подільського"</h2>
			<div className="flex flex-col md:flex-row w-full mb-10 md:space-x-8  h-full items-center justify-around">
				<div className="md:w-1/2 lg:ml-10  md:mb-0">
					<div>
						<img
							src="https://myukraine.org.ua/wp-content/uploads/2016/12/kamyanets-8-min.jpg"
							alt="Кам'янець-Подільський"
						/>
					</div>
				</div>
				<div className="w-full  md:w-1/2">
					<div className="backdrop-blur-md p-10 ">
						Кам'янець-Подільський - місто з багатовіковою історією та визначними
						подіями, які вплинули на його розвиток. Заснований ще в давні часи,
						Кам'янець-Подільський став важливим оборонним пунктом та торговим
						центром на кордоні України. Однією з найважливіших подій в історії
						міста було утворення Кам'янецької фортеці в XIII столітті. Ця
						могутня фортеця стала символом міста і здобула репутацію
						неприступної оборонної споруди. Протягом віків фортеця зазнала
						численних перебудов, але його кам'яні стіни та башти залишилися
						свідками минулих епох.
					</div>
				</div>
			</div>
		</div>
	);
};
export default AcorDeon;
