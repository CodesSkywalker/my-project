import React from "react";
import "./histori.css";
const AcorDeon = () => {
	return (
		<div
			id="bGg"
			className="h-full border-y-[4px] border-solid border-black bg-cover bg-fixed  flex items-center flex-col"
		>
			<h2 className="inline-block my-16">"Історія Хотинської-Фортеці"</h2>
			<div className="flex flex-col md:flex-row w-full mb-10 md:space-x-8  h-full items-center justify-around">
				<div className="md:w-1/2 lg:ml-10  md:mb-0">
					<div>
						<img
							src="https://kraina-ua.com/up/tours/122/2_img-221108084767.jpg"
							alt="Кам'янець-Подільський"
						/>
					</div>
				</div>
				<div className="w-full  md:w-1/2">
					<div className="backdrop-blur-[100px] p-10 ">
					У 1828 році німецький природознавець Фрідріх Фальц-Фейн створив Асканію-Нову як приватну охоронну територію для збереження диких тварин. Заповідник отримав свою назву на честь двох річок - Асканія та Нова, які протікали через його територію. Протягом кількох десятиліть Фальц-Фейн працював над розширенням заповідника та збільшенням його біорізноманіття. Сьогодні Асканія-Нова залишається одним з найбільших заповідників в Україні та приваблює багатьох людей, які хочуть побачити унікальну природу та рідкісні види тварин, що населяють цю територію.
					</div>
				</div>
			</div>
		</div>
	);
};
export default AcorDeon;
