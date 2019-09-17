import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Poster from "Components/Poster";
import Loader from "Components/Loader";
import Error from "Components/Error";

const Container = styled.div`
	:not(:last-child) {
		margin-bottom: 50px;
	}
`;

const TVPresenter = ({ airingToday, topRated, popular, loading, error }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			{airingToday && airingToday.length > 0 && (
				<Section title="Airing Today">
					{airingToday.map(show => (
						<Poster
							key={show.id}
							id={show.id}
							title={show.name}
							imageUrl={show.poster_path}
							rating={show.vote_average}
							year={
								show.first_air_date &&
								show.first_air_date.substring(0, 4)
							}
							isMovie={false}
						/>
					))}
				</Section>
			)}
			{topRated && topRated.length > 0 && (
				<Section title="Top Rated Show">
					{topRated.map(show => (
						<Poster
							key={show.id}
							id={show.id}
							title={show.name}
							imageUrl={show.poster_path}
							rating={show.vote_average}
							year={
								show.first_air_date &&
								show.first_air_date.substring(0, 4)
							}
							isMovie={false}
						/>
					))}
				</Section>
			)}
			{popular && popular.length > 0 && (
				<Section title="Popular Show">
					{popular.map(show => (
						<Poster
							key={show.id}
							id={show.id}
							title={show.name}
							imageUrl={show.poster_path}
							rating={show.vote_average}
							year={
								show.first_air_date &&
								show.first_air_date.substring(0, 4)
							}
							isMovie={false}
						/>
					))}
				</Section>
			)}

			{/* 통신 에러 */}
			{error && <Error text={error} />}
		</Container>
	);

TVPresenter.propTypes = {
	airingToday: PropTypes.array,
	topRated: PropTypes.array,
	popular: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default TVPresenter;
