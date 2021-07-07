import Feed from "./Feed/Feed";
import Sidebar from "./Sidebar/Sidebar";

function Main() {
	return (
		<div className="flex flex-col px-3 py-8">
			<Sidebar />
			<Feed />
		</div>
	);
}

export default Main;
