import React from "react";
import "./histori.css";
const AcorDeon = () => {
	return (
		<div
			id="bGg"
			className="h-full border-y-[4px] border-solid border-black bg-cover bg-fixed  flex items-center flex-col"
		>
			<h2 className="inline-block my-16">"Історія Львову"</h2>
			<div className="flex flex-col md:flex-row w-full mb-10 md:space-x-8  h-full items-center justify-around">
				<div className="md:w-1/2 lg:ml-10  md:mb-0">
					<div>
						<img
							src="https://spadshchyna.lviv.ua/wp-content/uploads/2023/04/pixeleap_1682498768839-01.jpeg"
							alt="Кам'янець-Подільський"
						/>
					</div>
				</div>
				<div className="w-full  md:w-1/2">
					<div className="backdrop-blur-[100px] p-10 ">
						Місто було засноване у 1256 році, що робить його одним з найстаріших
						міст в Україні. Львів отримав свою назву на честь Лева I, короля
						Русі, який був символом міського гербу. За свою довгу історію Львів
						був під владою різних держав і культурних впливів, що вплинуло на
						його архітектуру, культуру та традиції. Сьогодні Львів визнано
						ЮНЕСКО світовою спадщиною та одним з найбільш відвідуваних
						туристичних місць в Україні.
					</div>
				</div>
			</div>
		</div>
	);
};
export default AcorDeon;
