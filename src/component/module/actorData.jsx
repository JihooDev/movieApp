import React from 'react';
import Styles from './component.module.css';

export default function ActorData({ data, IMG_URL }) {
	const { profile_path } = data;

	return (
		<section className={Styles.actor}>
			<div className={Styles.actor_box}>
				<img
					src={IMG_URL + profile_path}
					alt="배우 사진"
					onError={e => {
						e.target.src = 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png';
					}}
				/>
				<h1>{data.name ? data.name : '배우 정보가 없습니다.'}</h1>
			</div>
		</section>
	);
}
