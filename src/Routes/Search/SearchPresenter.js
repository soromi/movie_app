import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Poster from "Components/Poster";
import Loader from "Components/Loader";
import Error from "Components/Error";

const Container = styled.div``;

const Form = styled.form`
	width: 100%;
	margin-bottom: 50px;
`;

const Input = styled.input`
	all: unset;
	width: 100%;
	font-size: 30px;
`;

const SearchPresenter = ({
	movieResults,
	tvResults,
	searchTerm,
	loading,
	error,
	handleSubmit,
	updateTerm
}) => (
	<Container>
		<Helmet>
			<title>Search | Movie App</title>
		</Helmet>

		{/* 검색창 */}
		<Form onSubmit={handleSubmit}>
			<Input
				placeholder="Search Movies or TV shows..."
				value={searchTerm}
				onChange={updateTerm}></Input>
		</Form>

		{/* 검색 결과창 */}
		{loading ? (
			<Loader />
		) : (
			<>
				{movieResults && movieResults.length > 0 && (
					<Section title="Movie Results">
						{movieResults.map(movie => (
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
				{tvResults && tvResults.length > 0 && (
					<Section title="TV Show Results">
						{tvResults.map(show => (
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

				{/* 결과값 없음 */}
				{movieResults &&
					tvResults &&
					movieResults.length === 0 &&
					tvResults.length === 0 && <Error text={"Nothing Found"} />}
			</>
		)}
	</Container>
);

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	searchTerm: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
	handleSubmit: PropTypes.func.isRequired,
	updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
