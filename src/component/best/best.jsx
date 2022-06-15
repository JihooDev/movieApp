import React from 'react';
import Card from '../module/card';
import Styles from './best.module.css';

export default function Best({ data, IMG_URL }) {
	return (
		<div className={Styles.Best}>
			<div className={['container', Styles.container].join(' ')}>
				<h1>인기 영화</h1>
				<div className={Styles.data}>
					{data.map(movies => {
						return <Card key={movies.id} data={movies} IMG_URL={IMG_URL} />;
					})}
				</div>
			</div>
		</div>
	);
}
