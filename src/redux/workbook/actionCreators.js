import firebase from "../../config/firebaseConfig";
import * as actionTypes from "./actionTypes";

export const getWorkbooks = () => {
	return (dispatch) => {
		firebase
			.database()
			.ref(`/Workbooks`)
			.on("value", (snapshot) => {
				if (snapshot.exists()) {
					dispatch({
						type: actionTypes.GET_WORKBOOKS,
						payload: {
							workbooks: snapshot.val(),
						},
					});
				}
			});
	};
};

export const deleteWorkbook = (id) => {
	return (dispatch) => {
		firebase
			.database()
			.ref(`/Workbooks/${id}`)
			.remove()
			.then(() =>
				dispatch({
					type: actionTypes.DELETE_WORKBOOK_SUCCESS,
				})
			)
			.catch(() => {
				dispatch({
					type: actionTypes.DELETE_WORKBOOK_ERROR,
				});
			});
	};
};

export const resetDeleteStatus = () => ({
	type: actionTypes.RESET_DELETE_STATUS,
});

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
