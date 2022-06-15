import React from 'react';
import Styles from './component.module.css';

export default function Card({ data, IMG_URL }) {
	const { title, release_date, overview, poster_path, vote_average, name, first_air_date } = data;
	return (
		<div className={Styles.card}>
			<h1>{data.length}</h1>
			<div className={Styles.img}>
				<img
					src={IMG_URL + poster_path}
					onError={e => {
						e.target.src = 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png';
					}}
				/>
			</div>
			<div className={Styles.over_view}>
				<h1>
					{title ? title : name}
					<span>{release_date ? release_date : first_air_date}</span>
				</h1>

				<p>{overview ? overview : '영화 정보 없음'}</p>
			</div>
			<div className={Styles.text}>
				<h1>{title}</h1>
				<p>{vote_average}</p>
			</div>
		</div>
	);
}
