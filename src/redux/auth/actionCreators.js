import firebase from "../../config/firebaseConfig";
import * as actionTypes from "./actionTypes";

export const userSignIn = ({ email, password }) => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				if (res !== null && res.user !== null) {
					dispatch(getUserData(res.user.uid));
					dispatch({
						type: actionTypes.SIGN_IN_SUCCESS,
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.SIGN_IN_ERROR,
					payload: {
						error,
					},
				});
			});
	};
};

export const userLogout = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({
					type: actionTypes.USER_LOGOUT,
				});
			});
	};
};

export const getCurrentUser = () => {
	return (dispatch) => {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				dispatch(getUserData(user.uid));
			} else {
				dispatch({
					type: actionTypes.SIGN_IN_ERROR,
					payload: {
						error: null,
					},
				});
			}
		});
	};
};

const getUserData = (id) => {
	return (dispatch) => {
		firebase
			.database()
			.ref(`/Users/${id}`)
			.once("value")
			.then((snapshot) =>
				dispatch({
					type: actionTypes.SET_SIGNED_IN_USER_DATA,
					payload: {
						userData: snapshot.val(),
					},
				})
			);
	};
};
