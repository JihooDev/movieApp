import React from 'react';
import Styles from './genre.module.css';
import Card from '../../module/card';
import { useState } from 'react';

export default function Genre({ data, dark, IMG_URL, API_KEY }) {
	return (
		<div>
			<div className={['container', Styles.container].join(' ')}>
				<h1 style={{ color: `${dark ? '#fff' : '#000'}` }}>장르 별 몰아보기</h1>

				<ul className={Styles.list_box}>
					{data &&
						data.map(it => {
							return (
								<li style={{ color: `${dark ? '#fff' : '#000'}` }} className={Styles.dot}>
									{it.name}
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
}
