import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

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
							<span id={movie.id}>{movie.title}</span>
						))}
					</Section>
				)}
				{tvResults && tvResults.length > 0 && (
					<Section title="TV Show Results">
						{tvResults.map(show => (
							<span id={show.id}>{show.name}</span>
						))}
					</Section>
				)}
				<Section />
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
