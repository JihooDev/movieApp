import React from 'react';
import Styles from './comming.module.css';
import Card from '../../module/card';
import AboutBanner from '../../module/about_banner';

export default function Comming({ data, IMG_URL, dark }) {
	return (
		<div>
			<AboutBanner back_color={'#e74c3c'} num={'four'} mainText={'Detail'} preview={'카드를 클릭해서 영화의 상세정보를 확인하세요!'} />
			<div className={['container', Styles.container].join(' ')}>
				<div className={Styles.data}>
					{data.map(movies => {
						return <Card key={movies.id} data={movies} IMG_URL={IMG_URL} dark={dark} />;
					})}
				</div>
			</div>
		</div>
	);
}
