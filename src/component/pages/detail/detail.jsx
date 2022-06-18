import React, { useEffect } from 'react';
import Styles from './detail.module.css';

export default function Detail({ close, data, IMG_URL }) {
	useEffect(() => {
		console.log(data);
	});
	const { title, release_date, backdrop_path, overview, poster_path, vote_average, name, first_air_date } = data;
	return (
		<div className={Styles.detail} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}image/modal_back.jpg)` }}>
			<div className={Styles.container}>
				<h1
					onClick={() => {
						close(false);
					}}
				>
					닫기
				</h1>
				<h1>{title}</h1>
				<p>{release_date}</p>
				<img src={IMG_URL + backdrop_path} alt="" />
				<p>{overview}</p>
			</div>
		</div>
	);
}
