import React from "react";
import "./histori.css";
const AcorDeon = () => {
	return (
		<div
			id="bGg"
			className="h-full border-y-[4px] border-solid border-black bg-cover bg-fixed  flex items-center flex-col"
		>
			<h2 className="inline-block my-16">"Історія Софії-Київської"</h2>
			<div className="flex flex-col md:flex-row w-full mb-10 md:space-x-8  h-full items-center justify-around">
				<div className="md:w-1/2 lg:ml-10  md:mb-0">
					<div>
						<img
							src="https://etnosvit.com/wp-content/uploads/kiev-sofia-kievskaya-1.jpg"
							alt="Кам'янець-Подільський"
						/>
					</div>
				</div>
				<div className="w-full  md:w-1/2">
					<div className="backdrop-blur-md p-10 ">
					В 1240 році під час монгольсько-татарського нападу на Київ, Софія-Київська була тяжко пошкоджена і спустошена. Однак, завдяки ретельному відновленню та реставрації, ця церква зуміла вижити протягом століть і до наших днів. Це свідчить про витривалість та велич цього історичного пам'ятника, а також про його значення для культурного спадку України.
					</div>
				</div>
			</div>
		</div>
	);
};
export default AcorDeon;
