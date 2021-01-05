import firebase from "../../config/firebaseConfig";
import * as actionTypes from "./actionTypes";

export const getWorkplaces = (id) => {
	return (dispatch) => {
		firebase
			.database()
			.ref(`/Workbooks/${id}/Workplaces`)
			.on("value", (snapshot) => {
				if (snapshot.exists()) {
					dispatch({
						type: actionTypes.GET_WORKPLACES,
						payload: {
							workplaces: snapshot.val(),
						},
					});
				}
			});
	};
};

export const deleteWorkplace = (workplaceID, workbookID) => {
	return (dispatch) => {
		firebase
			.database()
			.ref(`/Workbooks/${workbookID}/Workplaces/${workplaceID}`)
			.remove()
			.then(() =>
				dispatch({
					type: actionTypes.DELETE_WORKPLACE_SUCCESS,
				})
			)
			.catch(() => {
				dispatch({
					type: actionTypes.DELETE_WORKPLACE_ERROR,
				});
			});
	};
};

export const resetDeleteStatus = () => ({
	type: actionTypes.RESET_DELETE_STATUS,
});

export const resetWorkplaceStatus = () => ({
	type: actionTypes.RESET_WORKPLACE_STATUS,
});

export const setNewWorkplaceStart = () => ({
	type: actionTypes.SET_NEW_WORKPLACE_START,
});

export const setNewWorkplace = (data, id) => {
	return (dispatch) => {
		firebase
			.database()
			.ref(`/Workbooks/${id}/Workplaces`)
			.push(data)
			.then(() => {
				dispatch({
					type: actionTypes.SET_NEW_WORKPLACE_SUCCESS,
				});
			})
			.catch(() => {
				dispatch({
					type: actionTypes.SET_NEW_WORKPLACE_ERROR,
				});
			});
	};
};
