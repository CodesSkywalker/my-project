import React from 'react'
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Draver = ({onClose ,isOpen}) => {
	return (
		<>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				
			>
				<DrawerOverlay />
				<DrawerContent className="flex items-center  flex-col">
					<DrawerCloseButton />
					<div className="flex flex-col  mt-10">
						<Link
							className="inline-block text-center md:border-none border-b-2 border-solid text-lg font-bold text-gray-500 hover:text-black"
							to="/site1"
						>
							Кам'янець-Подільськ
						</Link>
						<Link
							className="inline-block text-center md:border-none border-b-2 border-solid text-lg font-bold text-gray-500 hover:text-black"
							to="/site2"
						>
							Хортиця
						</Link>
						<Link
							className="inline-block text-center md:border-none border-b-2 border-solid text-lg font-bold text-gray-500 hover:text-black"
							to="/site3"
						>
							Хотинська фортеця
						</Link>
						<Link
							className="inline-block text-center md:border-none border-b-2 border-solid text-lg font-bold text-gray-500 hover:text-black"
							to="/site4"
						>
							Батурин
						</Link>
						<Link
							className="inline-block text-center md:border-none border-b-2 border-solid text-lg font-bold text-gray-500 hover:text-black"
							to="/site5"
						>
							Софія-Київська
						</Link>
						<Link
							className="inline-block text-center md:border-none border-b-2 border-solid text-lg font-bold text-gray-500 hover:text-black"
							to="/site6"
						>
							Асканія-нова
						</Link>
						<Link
							className="inline-block text-center md:border-none border-b-2 border-solid text-lg font-bold text-gray-500 hover:text-black"
							to="/site7"
						>
							Львів
						</Link>
					</div>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Draver;
