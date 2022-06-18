import React from 'react';
import Styles from './bestTv.module.css';
import Card from '../../module/card';

export default function BestTv({ data, dark, IMG_URL, API_KEY }) {
	console.log(data);
	return (
		<div>
			<div className={['container', Styles.container].join(' ')}>
				<h1 style={{ color: `${dark ? '#fff' : '#000'}` }}>인기 TV 프로그램</h1>
				<div className={Styles.data}>
					{data.map(movies => {
						console.log('드라마', movies);
						return <Card key={movies.id} data={movies} IMG_URL={IMG_URL} dark={dark} API_KEY={API_KEY} />;
					})}
				</div>
			</div>
		</div>
	);
}
