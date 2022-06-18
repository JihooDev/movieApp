import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from '../../module/card';
import Detail from '../detail/detail';
import Styles from './search.module.css';

export default function Search({ IMG_URL, data, searchText, setSearchText, onClick }) {
	const [loading, setLoading] = useState(false);

	const handleClick = e => {
		e.preventDefault();
		onClick();
	};

	const handleChange = e => {
		setSearchText(e.target.value);
	};

	return (
		<div className={Styles.Search}>
			<div className={Styles.back_img}>
				<h1>원하시는 영화를 검색 해보세요!</h1>
				<img src={process.env.PUBLIC_URL + 'image/main.jpg'} id={Styles.back_img} />
				<div className={Styles.search_bar}>
					<form action="">
						<input type="text" className={Styles.input_box} value={searchText} onChange={handleChange} />
						<button onClick={handleClick}>
							<img src={process.env.PUBLIC_URL + 'image/search.svg'} alt="" />
						</button>
					</form>
				</div>
			</div>
			<div className={['container', Styles.container].join(' ')}>
				<h1></h1>
				<div className={Styles.data}>
					{data.map(searchs => {
						return (
							<>
								<Card key={searchs.id} data={searchs} IMG_URL={IMG_URL} />
							</>
						);
					})}
				</div>
				<h1 id={Styles.null_text}>{data.length > 0 ? null : '원하시는 데이터가 없습니다.'}</h1>
			</div>
		</div>
	);
}
