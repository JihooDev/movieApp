import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './main';
import Api from './service/api';
import firebase from './service/firebase';
console.log(firebase);

const movie = new Api(process.env.REACT_APP_FIREBASE_MOVIE_APIKEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Main movie={movie} />
	</React.StrictMode>
);
