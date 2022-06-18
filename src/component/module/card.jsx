import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Detail from '../pages/detail/detail';
import Styles from './component.module.css';

export default function Card({ data, IMG_URL, dark }) {
	const [openDetail, setOpenDetail] = useState(false);
	const { title, release_date, overview, poster_path, vote_average, name, first_air_date } = data;

	document.body.style.overflow = openDetail ? 'hidden' : 'unset';

	return (
		<>
			{openDetail == true ? <Detail close={setOpenDetail} data={data} IMG_URL={IMG_URL} /> : null}
			<div
				className={Styles.card}
				onClick={() => {
					setOpenDetail(true);
				}}
				style={{ backgroundColor: `${dark ? '#c8d6e5' : 'rgba(0, 0, 0, 0.5)'}` }}
			>
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
					<h1 style={{ color: `${dark ? '#000' : '#fff'}` }}>{title ? title : name}</h1>
					<p>{vote_average}</p>
				</div>
			</div>
		</>
	);
}
