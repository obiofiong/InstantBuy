import Sneakers from "../../../../img/Featured/sneakers.png";

function NoticeCard({ title, img, direction, bg }) {
	const color = bg;
	return (
		<div
			className={
				direction == "main"
					? "w-auto h-28 p-2 bg-blue-300 rounded-2xl flex items-center justify-between sm:h-48 sm:p-4  md:h-56    hover:bg-blue-400 hover:shadow-xl"
					: "w-auto h-28 p-2 bg-blue-300 rounded-2xl flex flex-row-reverse items-center justify-between sm:h-48 sm:p-4  md:h-56    hover:bg-blue-400 hover:shadow-xl"
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
					className="max-h-40
                                sm:max-h-72"
					src={img}
					alt="img"
				/>
			</div>
		</div>
	);
}

export default NoticeCard;
