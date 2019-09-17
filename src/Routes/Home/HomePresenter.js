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

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			{nowPlaying && nowPlaying.length > 0 && (
				<Section title="Now Playing">
					{nowPlaying.map(movie => (
						<Poster
							key={movie.id}
							id={movie.id}
							title={movie.original_title}
							imageUrl={movie.poster_path}
							rating={movie.vote_average}
							year={
								movie.release_date &&
								movie.release_date.substring(0, 4)
							}
							isMovie={true}
						/>
					))}
				</Section>
			)}
			{upcoming && upcoming.length > 0 && (
				<Section title="Upcoming Movies">
					{upcoming.map(movie => (
						<Poster
							key={movie.id}
							id={movie.id}
							title={movie.original_title}
							imageUrl={movie.poster_path}
							rating={movie.vote_average}
							year={
								movie.release_date &&
								movie.release_date.substring(0, 4)
							}
							isMovie={true}
						/>
					))}
				</Section>
			)}
			{popular && popular.length > 0 && (
				<Section title="Popular Movies">
					{popular.map(movie => (
						<Poster
							key={movie.id}
							id={movie.id}
							title={movie.original_title}
							imageUrl={movie.poster_path}
							rating={movie.vote_average}
							year={
								movie.release_date &&
								movie.release_date.substring(0, 4)
							}
							isMovie={true}
						/>
					))}
				</Section>
			)}

			{/* 통신 에러 */}
			{error && <Error text={error} />}
		</Container>
	);

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	upcoming: PropTypes.array,
	popular: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default HomePresenter;
