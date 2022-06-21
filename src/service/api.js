class Api {
	constructor(key) {
		this.key = key;
	}

	bestData() {
		return fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=ko-KR&${this.key}`)
			.then(res => res.json())
			.then(data => data.results);
	}

	comming() {
		return fetch(`https://api.themoviedb.org/3/movie/upcoming?${this.key}&language=ko-KR`)
			.then(res => res.json())
			.then(data => data.results);
	}

	topRated() {
		return fetch(`https://api.themoviedb.org/3/movie/top_rated?${this.key}&language=ko-KR&page=1`)
			.then(res => res.json())
			.then(data => data.results);
	}

	searchData(url) {
		return fetch(`https://api.themoviedb.org/3/search/movie?${this.key}&language=ko-KR&sort_by=popularity.desc&query=${url}`)
			.then(res => res.json())
			.then(data => data.results);
	}
}

export default Api;
