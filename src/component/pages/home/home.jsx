import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../module/button';
import { motion } from 'framer-motion';
import Styles from './home.module.css';

export default function Home({ dark }) {
	const navigation = useNavigate();

	const projectGo = () => {
		navigation('/project');
	};

	const startGo = () => {
		navigation('/join');
	};

	return (
		<>
			<motion.div className={Styles.home} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.7 } }}>
				<div className={['container', `${Styles.container}`].join(' ')}>
					<div className={Styles.left}>
						<motion.h1
							style={{ color: dark ? '#fff' : '#000' }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.5 } }}
						>
							퇴근하고
							<br />
							영화 한편 어떠세요?
						</motion.h1>
						<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.7, delay: 1 } }}>
							인기있는 영화와
							<br />
							최신영화 정보를 한번에!
							<br />
							<span>오늘 뭐 봐?</span> 가 도와 드립니다!
						</motion.p>
						<motion.div className={Styles.btn_box} initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 0.7, delay: 1.5 } }}>
							<Button text={'시작하기'} type={'success'} onClick={startGo} />
							<Button text={'프로젝트 소개'} type={'default'} onClick={projectGo} />
						</motion.div>
					</div>
					<div className={Styles.right}>
						<motion.img
							src={process.env.PUBLIC_URL + `image/home_${dark ? 'dark' : 'light'}.svg`}
							alt="다크모드"
							initial={{ opacity: 0, transform: 'translate(50%,30%)' }}
							animate={{ opacity: 1, transform: 'translate(0%,0%)', transition: { duration: 0.7, delay: 2 } }}
						/>
					</div>
				</div>
			</motion.div>
		</>
	);
}
