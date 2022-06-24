import React from 'react';
import { useState } from 'react';
import Button from '../../module/button';
import Styles from './login.module.css';
import { authService, firebaseInstance } from '../../../service/fBase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Login({ init }) {
	const [email, setEmail] = useState('');

	const navigation = useNavigate();

	const [password, setPassword] = useState('');

	const [error, setError] = useState(false);

	const onSocialClick = async event => {
		const {
			target: { name },
		} = event;

		let provider;

		try {
			if (name === 'Google') {
				provider = new firebaseInstance.auth.GoogleAuthProvider();
				console.log(provider);
				navigation('/');
			} else if (name === 'Github') {
				provider = new firebaseInstance.auth.GithubAuthProvider();
				navigation('/');
			}
		} catch (error) {
			setError('소셜 링크 로그인에 오류가 있습니다.');
		}

		await authService.signInWithPopup(provider);
	};

	const onChange = event => {
		const {
			target: { name, value },
		} = event;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};

	const onSubmit = async event => {
		event.preventDefault();
		try {
			await authService.signInWithEmailAndPassword(email, password);
			navigation('/');
		} catch (error) {
			setError('로그인 정보가 일치하지 않습니다.');
		}
	};

	useEffect(() => {
		if (init) {
			navigation('/');
		}
	});

	return (
		<div className={Styles.login}>
			<motion.form
				onSubmit={onSubmit}
				initial={{ scale: 100, opacity: 0 }}
				animate={{ scale: 1, opacity: 1, transition: { duration: 1, ease: 'anticipate', easings: 'anticipate' } }}
			>
				<h1>로그인</h1>
				<div className={Styles.input_box}>
					<input type="text" className={Styles.input} name="email" placeholder="E-mail" required value={email} onChange={onChange} />
					<input type="password" className={Styles.input} name="password" placeholder="Password" required value={password} onChange={onChange} />
					<h3 style={{ color: 'red' }}>{error}</h3>
				</div>
				<span onClick={() => navigation('/join')}>회원이 아니신가요?</span>
				<div className={Styles.submit}>
					<img
						src={process.env.PUBLIC_URL + 'image/google.svg'}
						className={Styles.social}
						name="Google"
						alt="구글 로그인"
						onClick={onSocialClick}
					/>

					<img
						src={process.env.PUBLIC_URL + 'image/github_logo.svg'}
						className={Styles.social}
						name="Github"
						alt="깃 허브 로그인"
						onClick={onSocialClick}
					/>
					<Button text={'로그인'} type={'success'} />
				</div>
			</motion.form>
		</div>
	);
}
