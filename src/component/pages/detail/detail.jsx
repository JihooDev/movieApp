import React, { useEffect, useState } from 'react';
import ActorData from '../../module/actorData';
import Styles from './detail.module.css';
import { motion } from 'framer-motion';

export default function Detail({ close, data, IMG_URL }) {
	const { title, id, release_date, backdrop_path, overview, vote_average, name } = data;

	const CREDIT = `https://api.themoviedb.org/3/movie/${id}/credits?${process.env.REACT_APP_FIREBASE_MOVIE_APIKEY}`;
	const VIDEO = `https://api.themoviedb.org/3/movie/${id}/videos?${process.env.REACT_APP_FIREBASE_MOVIE_APIKEY}&language=ko-KR`;
	const [actor, setActor] = useState();
	const [videoData, setVideoData] = useState();
	const LINK = `https://www.youtube.com/embed/${videoData === undefined ? 'u_nc-t4oHfw' : videoData.key}`;

	const videos = url => {
		fetch(url)
			.then(res => res.json())
			.then(video => {
				setVideoData(video.results[0]);
			});
	};
	videos(VIDEO);
	const tvData = url => {
		fetch(url)
			.then(res => res.json())
			.then(credit => {
				setActor(credit.cast);
			});
	};
	tvData(CREDIT);

	return (
		<motion.div
			className={Styles.detail}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.4 } }}
			style={{ backgroundImage: `url(${process.env.PUBLIC_URL}image/modal_back.jpg)` }}
		>
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
						<div className={Styles.title}>
							<h1>{title ? title : name}</h1>
						</div>
						<a href={LINK} target="_blank" rel="noreferrer" className={Styles.link}>
							<img src={process.env.PUBLIC_URL + 'image/youtube.png'} alt="예고편" />
						</a>
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
				<h1 className={Styles.actor}>{actor ? '주요인물' : '인물 정보 없음'}</h1>
				<div className={Styles.actor_list}>
					{actor &&
						actor
							.map(data => {
								return <ActorData data={data} IMG_URL={IMG_URL} key={data.id} />;
							})
							.slice(0, 5)}
				</div>
			</div>
		</motion.div>
	);
}
