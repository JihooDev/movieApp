import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './login.module.css';
export default function Login({ authService, setLoginModal }) {
	const navigate = useNavigate();
	const welcome = userId => {
		navigate('/best', {
			state: {
				id: userId,
			},
		});
	};

	const onLogin = e => {
		authService.login(e.currentTarget.name).then(data => welcome(data.user.uid));
	};

	useEffect(() => {
		authService.onAuthChange(user => {
			user && welcome(user.id);
		});

		authService.onAuthChange(user => {
			if (!user) {
				navigate('/login');
			} else {
				navigate('/');
			}
		});
	});
	return (
		<div className={Styles.login}>
			<ul className={Styles.login_box}>
				<p>소셜 로그인</p>
				<h1
					onClick={() => {
						setLoginModal(false);
					}}
				>
					닫기
				</h1>
				<li>
					<button onClick={onLogin} name="Google" className={Styles.btn}>
						<img src={process.env.PUBLIC_URL + 'image/google.svg'} alt="구글 로그인" />
					</button>
				</li>
				<li>
					<button onClick={onLogin} name="Github" className={Styles.btn}>
						<img src={process.env.PUBLIC_URL + 'image/github_logo.svg'} alt="깃 허브 로그인" />
					</button>
				</li>
			</ul>
		</div>
	);
}
