import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	params: {
		api_key: "f06009640bd965f2659254c6ff0a6b1d",
		language: "en-US"
	}
});

export const moviesApi = {
	nowPlaying: () => api.get("movie/now_playing"),
	upcoming: () => api.get("movie/upcoming"),
	popular: () => api.get("movie/popular"),
	detail: id =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: "videos"
			}
		}),
	search: term =>
		api.get("search/movie", {
			params: {
				query: encodeURIComponent(term)
			}
		})
};

export const tvApi = {
	airingToday: () => api.get("tv/airing_today"),
	topRated: () => api.get("tv/top-rated"),
	popular: () => api.get("tv/popular"),
	detail: id =>
		api.get(`tv/${id}`, {
			params: {
				append_to_response: "videos"
			}
		}),
	search: term =>
		api.get("search/tv", {
			params: {
				query: encodeURIComponent(term)
			}
		})
};
