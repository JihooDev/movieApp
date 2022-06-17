import React, { useState } from 'react';
import Button from '../../module/button';
import Styles from './join.module.css';

export default function Join({ authService }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const onChange = e => {
		const {
			target: { name, value },
		} = e;

		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};

	const onSubmit = async e => {
		e.preventDefault();

		try {
			const data = await authService.signInWithEmailAndPassword(email, password);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={Styles.join}>
			<div className={['container', `${Styles.container}`].join(' ')}>
				<h1>회원가입</h1>
				<form onSubmit={onSubmit}>
					<input type="text" placeholder="Email" required value={email} name="email" onChange={onChange} />
					<input type="password" placeholder="Password" required value={password} name="password" onChange={onChange} />
					<Button type={'success'} text={'가입하기'} />
				</form>
			</div>
		</div>
	);
}
