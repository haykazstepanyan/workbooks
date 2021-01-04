import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Login = lazy(() => import("./pages/login"));

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Suspense fallback="Loading...">
					<Route path="/login" component={Login} />
				</Suspense>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
