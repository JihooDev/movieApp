import React from 'react';
import styles from './component.module.css';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../service/fBase';
import { useEffect } from 'react';
import Button from './button';

export default function Modal({ modal, setModal, userBox }) {
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
		<div className={styles.modal} onClick={closeModal} id="back_modal">
			<div className={styles.modal_container}>
				<h1>
					<span>{user_name}</span> 님 <br />
					오늘 뭐 봐? 를 이용해 주셔서 감사합니다!
				</h1>
				<p>로그아웃 하시겠습니까?</p>
				<div className={styles.btn_box}>
					<Button text={'계속 이용하기'} type={'success'} />
					<h1>공간</h1>
					<Button text={'로그아웃'} type={'fail'} onClick={onLogout} />
				</div>
			</div>
		</div>
	);
}
