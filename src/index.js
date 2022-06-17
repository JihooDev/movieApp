import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './main';
import AuthService from './service/auth_service';

const authService = new AuthService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Main authService={authService} />
	</React.StrictMode>
);
