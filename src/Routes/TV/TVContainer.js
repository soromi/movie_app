import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
	state = {
		airingToday: null,
		topRated: null,
		popular: null,
		loading: true,
		error: null
	};

	render() {
		const { airingToday, topRated, popular, loading, error } = this.state;
		return (
			<TVPresenter
				airingToday={airingToday}
				topRated={topRated}
				popular={popular}
				loading={loading}
				error={error}
			/>
		);
	}
}
