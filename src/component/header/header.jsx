import React, { useState } from 'react';
import Modal from '../module/modal';
import { useNavigate } from 'react-router-dom';
import Styles from './header.module.css';
import { motion } from 'framer-motion';
import './header.css';

export default React.memo(function Header({ init, dark, setDark, userBox }) {
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<motion.header
				style={{ backgroundColor: dark ? '#000' : '#fff' }}
				initial={{ opacity: 0, transform: 'translateY(-100%)' }}
				animate={{ opacity: 1, transform: 'translateY(0%)', transition: { duration: 1, delay: 1 } }}
			>
				<div className={Styles.header_con}>
					<div className={Styles.left}>
						<h1 onClick={() => navigate('/')}>오늘 뭐 봐?</h1>
					</div>
					<div className={Styles.menu_box}>
						<ul className={[Styles.menu]} style={{ color: dark ? '#fff' : '#000' }}>
							<li onClick={() => navigate('best')}>인기 영화</li>
							<li onClick={() => navigate('comming')}>신작</li>
							<li onClick={() => navigate('top_rated')}>추천 영화</li>
							<li onClick={() => navigate('project')}>프로젝트 소개</li>
						</ul>
						<div className={Styles.btn_box}>
							<button className={Styles.search_bar} onClick={() => navigate('search')}>
								<img src={process.env.PUBLIC_URL + `image/search_white.svg`} alt="검색" />
							</button>
							<button
								className={Styles.dark_btn}
								onClick={() => {
									setDark(!dark);
								}}
							>
								<img src={process.env.PUBLIC_URL + `image/${dark ? 'dark' : 'light'}.svg`} alt="다크모드" />
							</button>
							{!init ? (
								<button onClick={() => navigate('login')} className={Styles.login_btn}>
									<img src={process.env.PUBLIC_URL + 'image/user.svg'} alt="로그인" />
								</button>
							) : (
								<button
									onClick={() => {
										setModal(!modal);
									}}
									className={Styles.logout}
								>
									<p>{userBox._delegate.displayName}</p>
								</button>
							)}
						</div>
					</div>

					<button
						onClick={() => {
							setMenuOpen(!menuOpen);
						}}
						className={Styles.mobile_btn}
					>
						<img className={Styles.ham} src={process.env.PUBLIC_URL + `image/${dark ? 'list' : 'list_black'}.svg`} alt="햄버거" />
					</button>
				</div>

				<div className={[`${Styles.mobile_menu}, ${menuOpen ? Styles.open : Styles.closed}`].join(' ')}>
					<div className={Styles.mobile_btn_box}>
						<button
							className={Styles.mobile_button}
							onClick={() => {
								navigate('search');
								setMenuOpen(false);
							}}
						>
							<img src={process.env.PUBLIC_URL + 'image/search_white.svg'} alt="검색" />
						</button>
						<button
							className={dark ? Styles.dark_btn : Styles.mobile_button}
							onClick={() => {
								setDark(!dark);
							}}
						>
							<img src={process.env.PUBLIC_URL + `image/${dark ? 'dark' : 'light'}.svg`} alt="다크모드" />
						</button>
						{!init ? (
							<button
								onClick={() => {
									navigate('login');
									setMenuOpen(false);
								}}
								className={Styles.mobile_button}
							>
								<img src={process.env.PUBLIC_URL + 'image/user.svg'} alt="로그인" />
							</button>
						) : (
							<button
								onClick={() => {
									setModal(!modal);
								}}
								className={Styles.mobile_button_user}
							>
								<p className={Styles.user_name}>{userBox._delegate.displayName}</p>
							</button>
						)}
					</div>
					<ul className={Styles.mobile_ul}>
						<li
							onClick={() => {
								navigate('best');
								setMenuOpen(false);
							}}
						>
							인기 영화
						</li>
						<li
							onClick={() => {
								navigate('comming');
								setMenuOpen(false);
							}}
						>
							신작
						</li>
						<li
							onClick={() => {
								navigate('top_rated');
								setMenuOpen(false);
							}}
						>
							추천 영화
						</li>
						<li
							onClick={() => {
								navigate('project');
								setMenuOpen(false);
							}}
						>
							프로젝트 소개
						</li>
					</ul>
				</div>
			</motion.header>
			{modal ? <Modal modal={modal} setModal={setModal} userBox={userBox} /> : null}
		</>
	);
});
