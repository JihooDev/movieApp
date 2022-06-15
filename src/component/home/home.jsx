import React from 'react';
import Button from '../module/button';
import Styles from './home.module.css';

export default function Home() {
	return (
		<div className={Styles.home}>
			<div className={['container', `${Styles.container}`].join(' ')}>
				<div className={Styles.left}>
					<h1>
						퇴근하고
						<br />
						영화 한편 어떠세요?
					</h1>
					<p>
						인기있는 영화와
						<br />
						최신영화 정보를 한번에!
						<br />
						<span>오늘 뭐 봐?</span> 가 도와 드립니다!
					</p>
					<div className={Styles.btn_box}>
						<Button text={'시작하기'} type={'success'} />
						<Button text={'프로젝트 소개'} type={'default'} />
					</div>
				</div>
				<div className={Styles.right}>
					<img src={process.env.PUBLIC_URL + 'image/home.svg'} />
				</div>
			</div>
		</div>
	);
}
