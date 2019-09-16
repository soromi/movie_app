import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

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
						<span id={show.id}>{show.name}</span>
					))}
				</Section>
			)}
			{topRated && topRated.length > 0 && (
				<Section title="Top Rated Show">
					{topRated.map(show => (
						<span id={show.id}>{show.name}</span>
					))}
				</Section>
			)}
			{popular && popular.length > 0 && (
				<Section title="Popular Show">
					{popular.map(show => (
						<span id={show.id}>{show.name}</span>
					))}
				</Section>
			)}
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
