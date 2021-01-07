import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/loader";

const Login = lazy(() => import("./pages/login"));
const Workbook = lazy(() => import("./pages/workbook"));

function App() {
	return (
		<Switch>
			<Suspense
				fallback={
					<div className="page-center-loader">
						<Loader />
					</div>
				}
			>
				<Route path="/login" component={Login} />
				<Route path="/" exact component={Workbook} />
			</Suspense>
		</Switch>
	);
}

export default App;
