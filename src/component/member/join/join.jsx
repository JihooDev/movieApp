import React, { useState } from 'react';
import { authService } from '../../../service/fBase';
import Button from '../../module/button';
import Styles from './join.module.css';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Join({ setIsLogin }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigation = useNavigate();
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
			await authService.createUserWithEmailAndPassword(email, password).then(res => {
				console.log(res);
			});
			navigation('/');
		} catch (error) {
			setError('회원가입 정보가 일치하지 않습니다.');
			console.log(error);
		}
	};

	return (
		<div className={Styles.join}>
			<form onSubmit={onSubmit}>
				<h1>회원가입</h1>
				<div className={Styles.input_box}>
					<input type="text" className={Styles.input} name="email" placeholder="E-mail" required value={email} onChange={onChange} />
					<input type="password" className={Styles.input} name="password" placeholder="Password" required value={password} onChange={onChange} />
					<h3 style={{ color: error ? 'red' : 'blue' }}>{error ? error : '계정 생성 후 바로 로그인 됩니다'}</h3>
				</div>
				<div className={Styles.submit}>
					<Button text={'회원가입'} type={'success'} />
				</div>
			</form>
		</div>
	);
}
