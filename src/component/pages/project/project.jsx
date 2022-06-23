import React from 'react';
import Styles from './project.module.css';

export default function Project({ dark }) {
	return (
		<div className={Styles.project}>
			<div className={['container', `${Styles.container}`].join(' ')}>
				<div className={Styles.project_about}>
					<p style={{ color: `${dark ? '#fff' : '#000'}` }} className={Styles.main}>
						안녕하세요!
						<br />
						프론트엔드 개발자 <span className={Styles.my_name}>김지후 입니다</span>
						<br />
						<span>
							오늘 뭐 봐? 는 저의 포트폴리오로 제작 하였으며 <br />
							제작 기간은 2022년 6월 13일 부터 2022년 7월 까지 제작 하였습니다. <br />
							모든 영화를 소개 해주는 플랫폼이며 <br />
							인기영화 , 신작 , 추천영화 , 검색 기능을 제공 합니다. <br />
						</span>
					</p>
					<h1 className={Styles.logo}>오늘 뭐 봐?</h1>
				</div>
				<div className={Styles.lang} style={{ color: `${dark ? '#fff' : '#000'}` }}>
					<div className={Styles.lang_box1}>
						<p>
							개발 언어 <br />
							<img className={Styles.logo_img} src={process.env.PUBLIC_URL + 'image/html.png'} alt="로고 이미지" />
							<img className={Styles.logo_img} src={process.env.PUBLIC_URL + 'image/css.png'} alt="로고 이미지" />
							<img className={Styles.logo_img} src={process.env.PUBLIC_URL + 'image/js.png'} alt="로고 이미지" />
						</p>
						<p>
							프레임워크 <br />
							<img className={Styles.logo_img} src={process.env.PUBLIC_URL + 'image/react.png'} alt="로고 이미지" />
							<img className={Styles.logo_img} src={process.env.PUBLIC_URL + 'image/postcss.png'} alt="로고 이미지" />
						</p>
					</div>
					<div className={Styles.lang_box2}>
						<p>
							라이브러리
							<br />
							<img className={Styles.logo_img} src={process.env.PUBLIC_URL + 'image/framer.png'} alt="로고 이미지" />
						</p>
						<p>
							패키지 매니저
							<br />
							<img className={Styles.logo_img} src={process.env.PUBLIC_URL + 'image/yarn.svg'} alt="로고 이미지" />
						</p>
						<p>
							사용 API
							<br />
							<img className={Styles.logo_img} src={process.env.PUBLIC_URL + 'image/tmdb.png'} alt="로고 이미지" />
						</p>
					</div>
				</div>
				<footer className={Styles.link_box} style={{ color: `${dark ? '#fff' : '#000'}` }}>
					<div className={Styles.url} style={{ color: `${dark ? '#fff' : '#000'}` }}>
						<a href="#" className={Styles.url_text} style={{ color: `${dark ? '#fff' : '#000'}` }}>
							Jihoo's PortFolio
						</a>
						<a
							href="https://mail.google.com/mail/u/0/?fs=1&to=wlgn829@gmail.com&tf=cm"
							className={Styles.url_text}
							style={{ color: `${dark ? '#fff' : '#000'}` }}
						>
							Contact
						</a>
						<a href="https://github.com/JihooDev" target="_blank" className={Styles.github_logo}>
							<img src={process.env.PUBLIC_URL + 'image/github_logo.svg'} alt="깃허브로 이동" />
						</a>
					</div>
				</footer>
			</div>
		</div>
	);
}
