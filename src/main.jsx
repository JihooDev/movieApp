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
import { authService } from './service/fBase';
import Join from './component/member/join/join';

function Main({ movie }) {
	// ** API 데이터 관련
	const [bestMovie, setBestMovie] = useState([]);
	const [searchMovie, setSearchMovie] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [commingData, setCommingData] = useState([]);
	const [topData, setTopData] = useState([]);
	const [darkMode, setDarkMode] = useState(false);
	const IMG_URL = `https://image.tmdb.org/t/p/w500`;

	// ** 로그인 관련
	const [init, setInit] = useState(false);
	const [isLogin, setIsLogin] = useState(false);

	const search = () => {
		movie.searchData(searchText).then(data => setSearchMovie(data));
	};

	// ** firebase 데이터 관련
	const [checkItem, setCheckItem] = useState([]);
	const [userBox, setUserBox] = useState(null);

	useEffect(() => {
		authService.onAuthStateChanged(user => {
			if (user) {
				setIsLogin(true);
				setUserBox(user);
				setInit(true);
			} else {
				setIsLogin(false);
				setInit(false);
			}
		});

		movie.bestData().then(data => setBestMovie(data));

		movie.comming().then(data => setCommingData(data));

		movie.topRated().then(data => setTopData(data));
	}, []);

	return (
		<BrowserRouter>
			<div className={['Main', darkMode ? 'dark' : null].join(' ')}>
				<Header dark={darkMode} setDark={setDarkMode} isLogin={isLogin} init={init} />
				<Routes>
					<Route path="/" element={<Home dark={darkMode} />} />
					<Route path="/login" element={<Login init={init} />} />
					<Route
						path="/best"
						element={
							<Best data={bestMovie} IMG_URL={IMG_URL} dark={darkMode} checkItem={checkItem} setCheckItem={setCheckItem} userBox={userBox} />
						}
					/>
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
								init={init}
							/>
						}
					/>
					<Route path="/project" element={<Project dark={darkMode} />} />
					<Route path="/join" element={<Join setIsLogin={setIsLogin} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default Main;
