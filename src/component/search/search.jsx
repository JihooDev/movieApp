import React, { useState } from 'react';
import Card from '../module/card';
import Styles from './search.module.css';

export default function Search({ IMG_URL, BASE_URL, API_KEY }) {
	const SEARCH = `${BASE_URL}/search/movie?${API_KEY}&language=ko-KR&sort_by=popularity.desc&query=`;
	const [searchText, setSearchText] = useState('');
	const [searchMovie, setSearchMovie] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleClick = e => {
		e.preventDefault();

		fetch(SEARCH + searchText)
			.then(res => res.json())
			.then(data => {
				setTimeout(() => {
					setSearchMovie(data.results);
				}, 1500);
			});

		setSearchText('');
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
							<img src={process.env.PUBLIC_URL + 'image/search_black.svg'} alt="" />
						</button>
					</form>
				</div>
			</div>
			<div className={['container', Styles.container].join(' ')}>
				<h1></h1>
				<div className={Styles.data}>
					{searchMovie.map(searchs => {
						return (
							<>
								<Card key={searchs.id} data={searchs} IMG_URL={IMG_URL} />
							</>
						);
					})}
				</div>
				<h1 id={Styles.null_text}>{searchMovie.length > 0 ? null : '원하시는 데이터가 없습니다.'}</h1>
			</div>
		</div>
	);
}
