import React, { useState } from 'react';
import { authService } from '../../../service/fBase';
import Button from '../../module/button';
import Styles from './join.module.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Join() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const user_name = useRef();
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
				return res.user.updateProfile({
					displayName: user_name.current.value,
				});
			});
			navigation('/');
		} catch (error) {
			setError('회원가입 정보가 일치하지 않습니다.');
			console.log(error);
		}
	};

	return (
		<div className={Styles.join}>
			<motion.form
				onSubmit={onSubmit}
				initial={{ scale: 100, opacity: 0 }}
				animate={{ scale: 1, opacity: 1, transition: { duration: 1, ease: 'anticipate', easings: 'anticipate' } }}
			>
				<h1>회원 가입</h1>
				<div className={Styles.input_box}>
					<h3>ID</h3>
				</div>
			</motion.form>
		</div>
	);
}
