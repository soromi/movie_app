import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	font-size: 12px;
`;

const Image = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	background-image: url(${props => props.bgUrl});
	height: 180px;
	background-size: cover;
	border-radius: 4px;
	background-position: center center;
	@media (max-width: 767px) {
		height: 60vw;
	}
`;

const ImageContainer = styled.div`
	position: relative;
	margin-bottom: 10px;
`;

const Title = styled.span`
	display: block;
	margin-bottom: 3px;
`;

const Year = styled.span`
	font-size: 10px;
	color: rgba(255, 255, 255, 0.5);
`;

const DetailPoster = ({ title, imageUrl, rating, year }) => (
	<Container>
		<ImageContainer>
			<Image
				bgUrl={
					imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : ""
				}
			/>{" "}
		</ImageContainer>
		<Title>{title}</Title>
		<Year>{year}</Year>
	</Container>
);

DetailPoster.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string,
	year: PropTypes.string
};

export default DetailPoster;
