import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div``;

const Title = styled.span``;

const Rating = styled.span``;

const Year = styled.span``;

const Poster = ({ id, title, imageUrl, rating, year, isMovie = false }) => (
	<Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
		<Container>
			<ImageContainer>
				<Image bgUrl={imageUrl} />
				<Rating>
					<span role="img" aria-label="rating">
						⭐️
					</span>
					{rating}/10
				</Rating>
			</ImageContainer>
			<Title>{title}</Title>
			<Year>{year}</Year>
		</Container>
	</Link>
);

Poster.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool
};

export default Poster;
