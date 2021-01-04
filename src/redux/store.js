import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/rootReducer";

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
			compose
	)
);

export default store;
