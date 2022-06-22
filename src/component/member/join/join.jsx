import React, { useState } from 'react';
import { authService } from '../../../service/fBase';
import Button from '../../module/button';
import Styles from './join.module.css';

export default function Join() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
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

	const onSubmit = async e => {
		e.preventDefault();

		await authService.createUserWithEmailAndPassword(email, password);
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
