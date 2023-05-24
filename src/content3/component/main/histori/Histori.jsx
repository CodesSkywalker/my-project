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
							src="https://karpatium.com.ua/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWNCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--feff2cecd6a03a6508e8a945cfa030e52c47a01b/%D1%85%D0%BE%D1%82%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B0-%D1%84%D0%BE%D1%80%D1%82%D0%B5%D1%86%D1%8F-2.jpeg"
							alt="Кам'янець-Подільський"
						/>
					</div>
				</div>
				<div className="w-full  md:w-1/2">
					<div className="backdrop-blur-md p-10 ">
						Хотинська фортеця, також відома як Хотинський замок, є однією з
						найвидатніших історичних споруд в Україні. Вона розташована на
						високому березі Дністровського каньйону поблизу міста Хотин у
						Чернівецькій області. Одним із найвідоміших подій, пов'язаних з
						Хотинською фортецею, є облога 1621 року, коли тут відбулася битва
						під Хотином. Ця битва стала частиною війни між Османською імперією
						та Польсько-Литовською Королівством. Польські та українські війська,
						очолювані королем Зигмунтом ІІІ Вазо та гетьманом Станіславом
						Конецпольським, обороняли фортецю від османського вторгнення.
					</div>
				</div>
			</div>
		</div>
	);
};
export default AcorDeon;
