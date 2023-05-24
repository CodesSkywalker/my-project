import { StopHotel } from "./index";

const Hotel = () => {
	return (
		<div className="flex justify-center flex-col items-center">
			<span className="text-center inline-block w-full md:w-1/3 text-xl mb-4">
				Якщо ви приїхали здалеку та не знаєте, де можна перепочити, ось вам наші
				варіанти:
			</span>
			<div className="w-full my-20 flex flex-col lg:flex-row justify-center">
				{StopHotel.map((e) => (
					<div
						className="flex w-full lg:w-1/2  order border-solid h-full flex-col my-4 px-10"
						key={e.id}
					>
						<div className="w-full justify-center h-40">
							<img
								src={e.img}
								className="w-full rounded-md h-full object-cover"
								alt="Background"
							/>
						</div>
						<div className="text-justify mt-4">
							<div className="text-xl py-3 font-bold">{e.h}</div>
							<div className="py-3">{e.text}</div>
						</div>
						<div className="flex border-t-2 pt-6 border-solid items-center border-black justify-between">
							<button className="p-4 rounded-full bg-blue-400 border-[3px] transition-all border-white hover:bg-white hover:border-blue-500">
								Замовити кімнтау
							</button>
							<span className="text-lg font-bold ">{e.price}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Hotel;
