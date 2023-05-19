import React from "react";
import Heder from "./component/header/header";
import Myswiper from "./component/main/swiper/Swiper";
import Acordeon from './component/main/histori/Histori.jsx'
import Hotel from "./component/main/hotel/Hotel"
import What from "./component/main/what to see/what"
const Site2 = () => {
	return (
		<>
			<Heder />
			<What/>
			<Acordeon/>
			<Hotel/>
			<Myswiper />
		</>
	);
};

export default Site2;
