import React from 'react';
import Card from '../../module/card';
import Styles from './topRated.module.css';

export default function TopRated({ data, IMG_URL, dark }) {
	return (
		<div>
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
