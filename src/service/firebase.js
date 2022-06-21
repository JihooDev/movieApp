import * as firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERLD,
	appId: process.env.REACT_APP_FIREBASE_APP_LD,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTLD,
};

export default firebase.initializeApp(firebaseConfig);
