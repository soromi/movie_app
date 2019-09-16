import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
	state = {
		movieResults: null,
		tvResults: null,
		searchTerm: "",
		loading: false,
		error: null
	};

	// componentDidMount() {
	// 	this.handleSubmit();
	// }

	handleSubmit = e => {
		// form submit 기능의 브라우저 새로고침 방지 및 이벤트 차단
		e.preventDefault();

		const { searchTerm } = this.state;
		if (searchTerm !== "") {
			this.searchByTerm();
		}
	};

	updateTerm = e => {
		const {
			target: { value }
		} = e;
		this.setState({ searchTerm: value });
		console.log(value);
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({ loading: true });

		try {
			const {
				data: { results: movieResults }
			} = await moviesApi.search(searchTerm);
			const {
				data: { results: tvResults }
			} = await tvApi.search(searchTerm);
			this.setState({ movieResults, tvResults });
		} catch (error) {
			this.setState({ error: "Can't find results" });
		} finally {
			this.setState({ loading: false });
		}
	};

	render() {
		const {
			movieResults,
			tvResults,
			searchTerm,
			loading,
			error
		} = this.state;
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				searchTerm={searchTerm}
				loading={loading}
				error={error}
				handleSubmit={this.handleSubmit}
				updateTerm={this.updateTerm}
			/>
		);
	}
}
