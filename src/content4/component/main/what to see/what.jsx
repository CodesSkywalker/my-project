import { Sity } from "./index.js";
const What = () => {
	return (
		<>
			<div className="flex flex-col mx-auto justify-center my-10 max-w-[1200px]">
				{Sity.map((e) => (
					<div
						className="mb-20 text-left border-2 rounded-lg p-6 md:space-x-16 md:flex items-center"
						key={e.id}
					>
						<div className="w-full  md:w-3/4">
							<div className="text-[16px] text-justify font-bold mb-2">{e.text}</div>
							<div className="mb-2 text-[16px] "><span className="text-gray-900 font-bold"> Адреса:</span>{e.text2}</div>
							<div className="mb-2"><span className="text-gray-900 font-bold">Як добратися:</span> {e.text3}</div>
							<div className="mb-2"><span className="text-gray-900 font-bold">Вхід:</span> {e.text4}</div>
						</div>
						<div className="w-full">
							<img
								src={e.img}
								alt="foto"
								className="w-full object-cover rounded-md"
							/>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default What;
