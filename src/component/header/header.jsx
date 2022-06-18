import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../module/button';
import Search from '../pages/search/search';
import Styles from './header.module.css';

export default function Header({ authService, dark, setDark }) {
	const navigate = useNavigate();
	const onLogout = () => {
		if (window.confirm('로그아웃 하시겠습니까?')) {
			authService.logout();
		}
	};
	return (
		<>
			<header>
				<div className={Styles.header_con}>
					<div className={Styles.left}>
						<h1 onClick={() => navigate('/')}>오늘 뭐 봐?</h1>
					</div>
					<ul className={Styles.menu} style={{ color: dark ? '#fff' : '#000' }}>
						<li onClick={() => navigate('best')}>인기 영화</li>
						<li onClick={() => navigate('best_tv')}>인기 TV 프로그램</li>
						<li onClick={() => navigate('best_tv')}>개봉 예정</li>
						<li onClick={() => navigate('recommended')}>추천 영화</li>
						<li onClick={() => navigate('contact')}>프로젝트 소개</li>
					</ul>
					<div className={Styles.login_btn}></div>
					<div className={Styles.search_bar}>
						<button onClick={() => navigate('search')}>
							<img src={process.env.PUBLIC_URL + 'image/search.svg'} alt="" />
						</button>
					</div>
					<button
						onClick={() => {
							setDark(!dark);
						}}
					>
						다크모드
					</button>
					<button onClick={onLogout}>로그아웃</button>
				</div>
			</header>
		</>
	);
}
