import React from 'react';
import Styles from './comming.module.css';
import Card from '../../module/card';

export default function Comming({ data, IMG_URL, dark }) {
	return (
		<div>
			<div className={['container', Styles.container].join(' ')}>
				<h1 style={{ color: `${dark ? '#fff' : '#000'}` }}>개봉 예정 영화</h1>
				<div className={Styles.data}>
					{data.map(movies => {
						return <Card key={movies.id} data={movies} IMG_URL={IMG_URL} dark={dark} />;
					})}
				</div>
			</div>
		</div>
	);
}
