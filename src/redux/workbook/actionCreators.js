import firebase from "../../config/firebaseConfig";
import * as actionTypes from "./actionTypes";

export const getWorkbooks = () => {
	return (dispatch) => {
		firebase
			.database()
			.ref(`/Workbooks`)
			.once("value")
			.then((snapshot) =>
				dispatch({
					type: actionTypes.GET_WORKBOOKS,
					payload: {
						workbooks: snapshot.val(),
					},
				})
			);
	};
};

export const resetWorkbookStatus = () => ({
	type: actionTypes.RESET_WORKBOOK_STATUS,
});

export const setNewWorkbookStart = () => ({
	type: actionTypes.SET_NEW_WORKBOOK_START,
});

export const setNewWorkbook = (data) => {
	return (dispatch) => {
		firebase
			.database()
			.ref(`/Workbooks/`)
			.push(data)
			.then(() => {
				dispatch({
					type: actionTypes.SET_NEW_WORKBOOK_SUCCESS,
				});
			})
			.catch(() => {
				dispatch({
					type: actionTypes.SET_NEW_WORKBOOK_ERROR,
				});
			});
	};
};
