import React, { useEffect, useState } from 'react';
import ActorData from '../../module/actorData';
import Styles from './detail.module.css';

export default function Detail({ close, data, IMG_URL }) {
	const { title, id, release_date, backdrop_path, overview, poster_path, vote_average, name, first_air_date } = data;

	const CREDIT = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6ecd252beb6f645e7eb78a9b40f1ddb3&language=ko-KR`;

	const [actor, setActor] = useState();
	useEffect(() => {
		const tvData = url => {
			fetch(url)
				.then(res => res.json())
				.then(credit => {
					setActor(credit.cast);
				});
		};
		tvData(CREDIT);
	}, []);

	return (
		<div className={Styles.detail} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}image/modal_back.jpg)` }}>
			<button
				className={Styles.close_btn}
				onClick={() => {
					close(false);
				}}
			>
				<img src={process.env.PUBLIC_URL + 'image/close.svg'} alt="" />
			</button>
			<div className={Styles.container}>
				<div className={Styles.view_top}>
					<div className={Styles.view}>
						<h1>{title ? title : name}</h1>
						<p>{release_date} 개봉</p>
						<p id={Styles.aver}>
							<span>{vote_average}</span>
						</p>
						<p>{overview}</p>
					</div>
					<div className={Styles.photo}>
						<img src={IMG_URL + backdrop_path} alt="" />
					</div>
				</div>
				<h1>{actor ? '주요인물' : '인물 정보 없음'}</h1>
				<div className={Styles.actor_list}>
					{actor &&
						actor
							.map(data => {
								return <ActorData data={data} IMG_URL={IMG_URL} />;
							})
							.slice(0, 5)}
				</div>
			</div>
		</div>
	);
}
