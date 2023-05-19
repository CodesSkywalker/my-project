import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { BG } from "./index";

const MySwiper = () => {
	return (
		<>
			<div className="h-screen">
				<Swiper
					navigation={true}
					autoplay={{
						delay: 5500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					{BG.map((e) => (
						<SwiperSlide key={e.id}>
							<img src={e.bg} alt="" />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default MySwiper;
