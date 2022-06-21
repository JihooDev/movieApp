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

function Main({ movie }) {
	const [bestMovie, setBestMovie] = useState([]);
	const [searchMovie, setSearchMovie] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [commingData, setCommingData] = useState([]);
	const [topData, setTopData] = useState([]);
	const [darkMode, setDarkMode] = useState(false);
	const IMG_URL = `https://image.tmdb.org/t/p/w500`;

	const search = () => {
		movie.searchData(searchText).then(data => setSearchMovie(data));
	};

	useEffect(() => {
		movie.bestData().then(data => setBestMovie(data));

		movie.comming().then(data => setCommingData(data));

		movie.topRated().then(data => setTopData(data));
	}, []);

	return (
		<BrowserRouter>
			<div className={['Main', darkMode ? 'dark' : null].join(' ')}>
				<Header dark={darkMode} setDark={setDarkMode} />
				<Routes>
					<Route path="/login" element={<Login />}></Route>
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
								searchText={searchText}
								setSearchText={setSearchText}
								onClick={search}
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
