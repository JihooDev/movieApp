import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../search/search';
import Styles from './header.module.css';

export default function Header() {
	const navigate = useNavigate();
	return (
		<>
			<header>
				<div className={Styles.header_con}>
					<div className={Styles.left}>
						<h1 onClick={() => navigate('/')}>오늘 뭐 봐?</h1>
					</div>
					<ul className={Styles.menu}>
						<li onClick={() => navigate('best')}>인기 영화</li>
						<li onClick={() => navigate('best_tv')}>인기 드라마</li>
						<li onClick={() => navigate('recommended')}>추천 영화</li>
						<li onClick={() => navigate('contact')}>프로젝트 소개</li>
					</ul>
					<div className={Styles.login_btn}>
						<button>
							<img src={process.env.PUBLIC_URL + 'image/user.svg'} />
						</button>
					</div>
					<div className={Styles.search_bar}>
						<button onClick={() => navigate('search')}>
							<img src={process.env.PUBLIC_URL + 'image/search.svg'} alt="" />
						</button>
					</div>
				</div>
			</header>
		</>
	);
}
