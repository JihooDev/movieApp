import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../service/fBase';
import Button from '../module/button';
import Styles from './header.module.css';

export default function Header({ init, dark, setDark }) {
	const navigate = useNavigate();

	useEffect(() => {
		console.log(init);
	});

	const onLogout = () => {
		authService.signOut();
		navigate('home');
		window.location.reload();
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
						<li onClick={() => navigate('comming')}>신작</li>
						<li onClick={() => navigate('top_rated')}>추천 영화</li>
						<li onClick={() => navigate('project')}>프로젝트 소개</li>
					</ul>
					<div className={Styles.search_bar}>
						<button onClick={() => navigate('search')}>
							<img src={process.env.PUBLIC_URL + 'image/search.svg'} alt="검색" />
						</button>
					</div>
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
						<Button text={'로그아웃'} onClick={onLogout} />
					)}
				</div>
			</header>
		</>
	);
}
