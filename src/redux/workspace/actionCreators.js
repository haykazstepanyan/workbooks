import firebase from "../../config/firebaseConfig";
import * as actionTypes from "./actionTypes";

export const getWorkspaces = (id) => {
	return (dispatch) => {
		firebase
			.database()
			.ref(`/Workbooks/${id}/Workspaces`)
			.once("value")
			.then((snapshot) =>
				dispatch({
					type: actionTypes.GET_WORKSPACES,
					payload: {
						workspaces: snapshot.val(),
					},
				})
			);
	};
};

export const resetWorkspaceStatus = () => ({
	type: actionTypes.RESET_WORKSPACE_STATUS,
});

export const setNewWorkspaceStart = () => ({
	type: actionTypes.SET_NEW_WORKSPACE_START,
});

export const setNewWorkspace = (data, id) => {
	return (dispatch) => {
		firebase
			.database()
			.ref(`/Workbooks/${id}/Workspaces`)
			.push(data)
			.then(() => {
				dispatch({
					type: actionTypes.SET_NEW_WORKSPACE_SUCCESS,
				});
			})
			.catch(() => {
				dispatch({
					type: actionTypes.SET_NEW_WORKSPACE_ERROR,
				});
			});
	};
};
