import './App.css';
import Header from './component/header/header';
import { useEffect, useState } from 'react';
import Best from './component/best/best';
import Search from './component/search/search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BestTv from './component/best_tv/bestTv';
import Contact from './component/contact/contact';
import Home from './component/home/home';
import Login from './component/login/login';

const API_KEY = process.env.REACT_APP_FIREBASE_MOVIE_APIKEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&language=ko-KR&${API_KEY}&page=1`;
const IMG_URL = `https://image.tmdb.org/t/p/w500`;
const UPCOMMING = `${BASE_URL}/movie/upcoming?${API_KEY}&language=ko-KR`;
const TVDATA = `${BASE_URL}/genre/tv/list?${API_KEY}&language=ko-KR`;
const TODAYTV = `${BASE_URL}/movie/top_rated?${API_KEY}&language=ko-KR&page=1`;
const TODAYTV2 = `${BASE_URL}/movie/top_rated?${API_KEY}&language=ko-KR&page=2`;

function Main() {
	const [bestMovie, setBestMovie] = useState([]);

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
					console.log(data);
				});
		};

		tvData(TODAYTV2);
	}, []);

	return (
		<BrowserRouter>
			{/* <Login /> */}
			<div className="Main">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/best" element={<Best data={bestMovie} IMG_URL={IMG_URL} />} />
					<Route path="/search" element={<Search IMG_URL={IMG_URL} BASE_URL={BASE_URL} API_KEY={API_KEY} />} />
					<Route path="/best_tv" element={<BestTv />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default Main;
