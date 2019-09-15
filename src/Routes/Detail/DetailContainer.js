import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
	constructor(props) {
		super(props);
		const {
			location: { pathname }
		} = props;
		this.state = {
			result: null,
			loading: true,
			error: null,
			isMovie: pathname.includes("/movie/")
		};
	}

	async componentDidMount() {
		const {
			match: {
				params: { id }
			},
			history: { push }
		} = this.props;

		// id가 숫자로만 이루어져 있는지 체크
		// 문자가 섞여있으면 기본 url로 리다이렉트
		if (id.match(/^[0-9]+$/) === null) {
			return push("/");
		}

		let result = null;
		try {
			if (this.isMovie) {
				({ data: result } = await moviesApi.detail(id));
			} else {
				({ data: result } = await tvApi.detail(id));
			}
		} catch (error) {
			this.setState({
				erroe: "Can't find anything"
			});
		} finally {
			this.setState({
				loading: false,
				result
			});
		}
	}

	render() {
		const { result, loading, error } = this.state;
		return (
			<DetailPresenter result={result} loading={loading} error={error} />
		);
	}
}
