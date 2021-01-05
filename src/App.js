import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/loader";

const Login = lazy(() => import("./pages/login"));
const Workbook = lazy(() => import("./pages/workbook"));

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Suspense
					fallback={
						<div className="page-center-loader">
							<Loader />
						</div>
					}
				>
					<Route path="/" exact component={Workbook} />
					<Route path="/login" component={Login} />
				</Suspense>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
