import React from 'react';
import Card from '../../module/card';
import Styles from './topRated.module.css';
import AboutBanner from '../../module/about_banner';

export default function TopRated({ data, IMG_URL, dark }) {
	return (
		<div>
			<AboutBanner num={'five'} back_color={'#2ecc71'} mainText={'Search'} preview={'원하시는 결과가 없을 때! 검색기능을 이용해보세요!'} />
			<div className={['container', Styles.container].join(' ')}>
				<h1 style={{ color: `${dark ? '#fff' : '#000'}` }}>추천 영화</h1>
				<div className={Styles.data}>
					{data &&
						data.map(movies => {
							return <Card key={movies.id} data={movies} IMG_URL={IMG_URL} dark={dark} />;
						})}
				</div>
			</div>
		</div>
	);
}
