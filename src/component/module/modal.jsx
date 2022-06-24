import React from 'react';
import styles from './component.module.css';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../service/fBase';
import Button from './button';
import { motion } from 'framer-motion';

export default function Modal({ setModal, userBox }) {
	const navigate = useNavigate();

	const user_name = userBox._delegate.displayName;

	const onLogout = () => {
		authService.signOut();
		setModal(false);
		navigate('/');
		window.location.reload();
	};

	const closeModal = e => {
		if (e.target.id === 'back_modal') {
			setModal(false);
		}
	};

	return (
		<motion.div
			className={styles.modal}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.4 } }}
			onClick={closeModal}
			id="back_modal"
		>
			<div className={styles.modal_container}>
				<h1>
					<span>{user_name}</span> 님 <br />
					오늘 뭐 봐? 를 이용해 주셔서 감사합니다!
				</h1>
				<p>로그아웃 하시겠습니까?</p>
				<div className={styles.btn_box}>
					<Button
						text={'계속 이용하기'}
						type={'success'}
						onClick={() => {
							setModal(false);
						}}
					/>
					<h1>공간</h1>
					<Button text={'로그아웃'} type={'fail'} onClick={onLogout} />
				</div>
			</div>
		</motion.div>
	);
}
