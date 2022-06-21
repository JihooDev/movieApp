import React from 'react';
import { useEffect } from 'react';
import styles from './about.module.css';

export default function About() {
	return (
		<div className={styles.about}>
			<div className={[`${styles.page}`, `${styles.pageOne}`].join(' ')}>
				<div className={styles.image}>
					<img src={process.env.PUBLIC_URL + 'image/page_one.png'} alt="노트북1" />
				</div>
				<div className={styles.text}>
					<h1>깔끔한 UI</h1>
					<p>
						메뉴마다 깔끔하게
						<br />
						정리 되어 있어서 누구나 편하게 이용 가능!
					</p>
				</div>
			</div>

			<div className={[`${styles.page}`, `${styles.pageTwo}`].join(' ')}>
				<div className={styles.image}>
					<img src={process.env.PUBLIC_URL + 'image/page_two.png'} alt="노트북2" />
				</div>
				<div className={styles.text}>
					<h1>다크모드 지원</h1>
					<p>
						사용자의 눈을 배려한 오늘 뭐 봐? 의 배려
						<br />
						영화를 즐기려면 눈은 항상 편하게!
					</p>
				</div>
			</div>

			<div className={[`${styles.page}`, `${styles.pageThree}`].join(' ')}>
				<div className={styles.image}>
					<img src={process.env.PUBLIC_URL + 'image/page_three.png'} alt="노트북3" />
				</div>
				<div className={styles.text}>
					<h1>인기있는 영화</h1>
					<p>
						메뉴마다 깔끔하게
						<br />
						정리 되어 있어서 누구나 편하게 이용 가능!
					</p>
				</div>
			</div>

			<div className={[`${styles.page}`, `${styles.pageFour}`].join(' ')}>
				<div className={styles.image}>
					<img src={process.env.PUBLIC_URL + 'image/page_four.png'} alt="노트북4" />
				</div>
				<div className={styles.text}>
					<h1>상세 정보</h1>
					<p>
						영화의 상세 내용을 확인 해보세요!
						<br />
						예고편, 배우 정보 등 을 지원합니다
					</p>
				</div>
			</div>
			<div className={[`${styles.page}`, `${styles.pageFive}`].join(' ')}>
				<div className={styles.image}>
					<img src={process.env.PUBLIC_URL + 'image/page_five.png'} alt="노트북5" />
				</div>
				<div className={styles.text}>
					<h1>검색 기능</h1>
					<p>
						원하는 영화를 빠르게 검색해보세요!
						<br />
						이름이 비슷한 영화를 모두 가져옵니다
					</p>
				</div>
			</div>
		</div>
	);
}
