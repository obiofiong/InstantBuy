import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="">
			<Navbar />
			<Switch>
				{/* <Route exact path="/"></Route> */}
				<Route exact path="/">
					<Main />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
