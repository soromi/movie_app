import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	font-size: 12px;
`;

const Image = styled.div`
	background-color: ${props =>
		props.img ? "transparent" : "rgba(0, 0, 0, 0.5)"};
	background-image: url(${props => props.img});
	height: 180px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	border-radius: 4px;
	@media (max-width: 767px) {
		height: 20vw;
	}
`;

const ImageContainer = styled.div`
	position: relative;
	margin-bottom: 10px;
`;

const Title = styled.span`
	display: block;
	margin-bottom: 3px;
	opacity: 0.7;
	line-height: 1.5;
`;

const Creator = ({ name, imageUrl }) => (
	<Container>
		<ImageContainer>
			<Image
				img={imageUrl && `https://image.tmdb.org/t/p/w200${imageUrl}`}
			/>{" "}
		</ImageContainer>
		<Title>{name}</Title>
	</Container>
);

Creator.propTypes = {
	name: PropTypes.string.isRequired,
	imageUrl: PropTypes.string
};

export default Creator;
