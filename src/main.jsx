import './App.css';
import Header from './component/header/header';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './component/pages/search/search';
import Best from './component/pages/best/best';
import BestTv from './component/pages/best_tv/bestTv';
import Contact from './component/pages/contact/contact';
import Home from './component/pages/home/home';
import Login from './component/member/login/login';
import Join from './component/member/join/join';
import Detail from './component/pages/detail/detail';

const API_KEY = process.env.REACT_APP_FIREBASE_MOVIE_APIKEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&language=ko-KR&${API_KEY}&page=1`;
const IMG_URL = `https://image.tmdb.org/t/p/w500`;
const UPCOMMING = `${BASE_URL}/movie/upcoming?${API_KEY}&language=ko-KR`;
const CATEGORY = `${BASE_URL}/genre/tv/list?${API_KEY}&language=ko-KR&page=1`;
const BEST_TV = `${BASE_URL}/tv/popular?${API_KEY}&language=ko-KR&page=1`;
const TODAYTV2 = `${BASE_URL}/movie/top_rated?${API_KEY}&language=ko-KR&page=2`;
const SEARCH = `${BASE_URL}/search/movie?${API_KEY}&language=ko-KR&sort_by=popularity.desc&query=`;

export const DataStateContext = React.createContext();

function Main({ authService }) {
	const [bestMovie, setBestMovie] = useState([]);
	const [searchMovie, setSearchMovie] = useState([]);
	const [loginModal, setLoginModal] = useState(false);
	const [searchText, setSearchText] = useState('');
	const [bestTv, setBestTv] = useState([]);

	useEffect(() => {
		const getMovie = url => {
			fetch(url)
				.then(res => res.json())
				.then(data => {
					setBestMovie(data.results);
				});
		};
		getMovie(API_URL);

		const tvData = url => {
			fetch(url)
				.then(res => res.json())
				.then(data => {
					setBestTv(data.results);
				});
		};

		tvData(BEST_TV);
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
					<Route
						path="/search"
						element={<Search IMG_URL={IMG_URL} data={searchMovie} onClick={searchData} searchText={searchText} setSearchText={setSearchText} />}
					/>
					<Route path="/best_tv" element={<BestTv data={bestTv} dark={darkMode} IMG_URL={IMG_URL} />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default Main;
