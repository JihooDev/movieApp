import React from 'react';
import Card from '../../module/card';
import AboutBanner from '../../module/about_banner';
import Styles from './best.module.css';

export default function Best({ data, IMG_URL, dark, checkItem, setCheckItem, userBox }) {
	return (
		<div className={Styles.Best}>
			<AboutBanner num={'three'} mainText={'Want'} back_color={'#6c5ce7'} preview={'원하시는 영화만 한번에 몰아서 확인하세요!'} />
			<div className={['container', Styles.container].join(' ')}>
				<div className={Styles.data}>
					{data.map(movies => {
						return (
							<Card
								key={movies.id}
								data={movies}
								IMG_URL={IMG_URL}
								dark={dark}
								checkItem={checkItem}
								setCheckItem={setCheckItem}
								userBox={userBox}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
