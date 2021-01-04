import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDX7sVrgmBvmTAt8dwvrpTw8Sy9Og77eqw",
	authDomain: "webb-fontaine-b719a.firebaseapp.com",
	projectId: "webb-fontaine-b719a",
	storageBucket: "webb-fontaine-b719a.appspot.com",
	messagingSenderId: "236763911162",
	appId: "1:236763911162:web:74b125e3f74026b9310a43",
};
firebase.initializeApp(config);

export default firebase;
