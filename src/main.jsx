import './App.css';
import Header from './component/header/header';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './component/pages/search/search';
import Best from './component/pages/best/best';
import Home from './component/pages/home/home';
import Login from './component/member/login/login';
import Comming from './component/pages/comming/comming';
import TopRated from './component/pages/topRated/topRated';
import Project from './component/pages/project/project';

const API_KEY = process.env.REACT_APP_FIREBASE_MOVIE_APIKEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&language=ko-KR&${API_KEY}&page=1`;
const IMG_URL = `https://image.tmdb.org/t/p/w500`;
const UPCOMMING = `${BASE_URL}/movie/upcoming?${API_KEY}&language=ko-KR&page=*`;
const TOP_RATED = `${BASE_URL}/movie/top_rated?${API_KEY}&language=ko-KR&page=1`;
const SEARCH = `${BASE_URL}/search/movie?${API_KEY}&language=ko-KR&sort_by=popularity.desc&query=`;

function Main({ authService }) {
	const [bestMovie, setBestMovie] = useState([]);
	const [searchMovie, setSearchMovie] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [commingData, setCommingData] = useState([]);
	const [topData, setTopData] = useState([]);

	useEffect(() => {
		const getMovie = url => {
			fetch(url)
				.then(res => res.json())
				.then(data => {
					setBestMovie(data.results);
				});
		};
		getMovie(API_URL);

		const comming = url => {
			fetch(url)
				.then(res => res.json())
				.then(data => {
					setCommingData(data.results);
				});
		};

		comming(UPCOMMING);

		const top = url => {
			fetch(url)
				.then(res => res.json())
				.then(data => {
					setTopData(data.results);
				});
		};

		top(TOP_RATED);
	}, []);

	const searchData = () => {
		fetch(SEARCH + searchText)
			.then(res => res.json())
			.then(data => {
				setSearchMovie(data.results);
			});
	};

	const [darkMode, setDarkMode] = useState(true);

	return (
		<BrowserRouter>
			<div className={['Main', darkMode ? 'dark' : null].join(' ')}>
				<Header authService={authService} dark={darkMode} setDark={setDarkMode} />
				<Routes>
					<Route path="/login" element={<Login authService={authService} />}></Route>
					<Route path="/" element={<Home dark={darkMode} />} />
					<Route path="/best" element={<Best data={bestMovie} IMG_URL={IMG_URL} dark={darkMode} />} />
					<Route path="/comming" element={<Comming data={commingData} IMG_URL={IMG_URL} dark={darkMode} />} />
					<Route path="/top_rated" element={<TopRated data={topData} IMG_URL={IMG_URL} dark={darkMode} />} />
					<Route
						path="/search"
						element={
							<Search
								IMG_URL={IMG_URL}
								dark={darkMode}
								data={searchMovie}
								onClick={searchData}
								searchText={searchText}
								setSearchText={setSearchText}
							/>
						}
					/>
					<Route path="/project" element={<Project dark={darkMode} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default Main;
