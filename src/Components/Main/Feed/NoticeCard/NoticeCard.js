import Sneakers from "../../../../img/Featured/sneakers.png";

function NoticeCard({ title, img, direction, bg, bgLevel }) {
	return (
		<div
			className={
				// direction == "main"
				// 	? "w-auto h-28 p-2 bg-blue-300 rounded-2xl flex items-center justify-between sm:h-48 sm:p-4  md:h-56    hover:bg-blue-400 hover:shadow-xl"
				// 	: "w-auto h-28 p-2 bg-purple-400 rounded-2xl flex flex-row-reverse items-center justify-between sm:h-48 sm:p-4  md:h-56    hover:bg-purple-500 hover:shadow-xl"
				`w-auto h-28 p-2 rounded-2xl flex items-center justify-between sm:h-48 sm:p-4  md:h-56   hover:shadow-xl group
				 ${direction === "main" ? "" : "flex-row-reverse"} 
				 ${bg}-${bgLevel} hover:${bg}-${bgLevel + 100}
				 `
			}>
			<div
				className="text-wrap text-sm text-white font-bold ml-2 w-2/5   
                            sm:ml-8 sm:text-xl
                            md:text-3xl
            ">
				{title}
				<span className=""></span>
			</div>
			<div className="mx-3 ">
				{" "}
				<img
					className="max-h-40 w-44 transition duration-400 ease-in-out transform hover:scale-110 
                                sm:max-h-64 sm:w-auto"
					src={img}
					alt="img"
				/>
			</div>
		</div>
	);
}

export default NoticeCard;
