import Sneakers from "../../../../img/Featured/sneakers.png";

function NoticeCard() {
	return (
		<div
			className="w-auto h-28 p-2 bg-blue-300 rounded-2xl flex items-center justify-between flex-
                        sm:h-48 sm:p-4 
                        md:h-56
                        hover:h-52 hover:bg-blue-400 hover:shadow-xl

        ">
			<div
				className="text-wrap text-sm text-white font-bold ml-2 w-2/5
                            
                            sm:ml-8 sm:text-xl
                            md:text-3xl
            ">
				Featured Sale for Today
				<span className=""></span>
			</div>
			<div
				className="mx-3 
                            xs:mx-5
                            sm:mr-10">
				{" "}
				<img
					className="max-h-44
                                sm:max-h-72"
					src={Sneakers}
					alt="sneakers"
				/>
			</div>
		</div>
	);
}

export default NoticeCard;
