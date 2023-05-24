import React from "react";
import "./histori2.css"
const AcorDeon = () => {
	return (
		<div id="bG" className="h-full border-y-[4px] border-solid border-black bg-cover bg-fixed  flex items-center flex-col" >
			<h2 className="inline-block my-16">"Історія Хортиці"</h2>
			<div className="flex flex-col md:flex-row w-full mb-10 md:space-x-8  h-full items-center justify-around">
				<div className="md:w-1/2 lg:ml-10  md:mb-0">
					<div>
						<img
							src="https://files.ar25.org/sites/default/files/node/2013/06/22395/zaporozhchipyshutlysta_0.jpg"
							alt="Кам'янець-Подільський"
						/>
					</div>
				</div>
				<div className="w-full  md:w-1/2">
					<div className="backdrop-blur-md p-10 ">
					Під час Хмельницької війни в 1648-1654 роках, Хортиця стала основною базою та фортечним містом Запорізької Січі - самостійної козацької республіки. Козаки з Хортиці вели активну боротьбу проти польсько-литовського вторгнення та виграли низку важливих битв. Цей період у історії Хортиці відображає значення острова як символу козацтва та місця сили та незалежності.
					</div>
				</div>
			</div>
		</div>
	);
};
export default AcorDeon;
