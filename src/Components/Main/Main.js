import Feed from "./Feed/Feed";
import Sidebar from "./Sidebar/Sidebar";

function Main() {
	return (
		<div className="px-3 py-8 sm:grid sm:grid-cols-6">
			<Sidebar />
			<Feed />
		</div>
	);
}

export default Main;
