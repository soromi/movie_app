import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	font-size: 12px;
`;

const Image = styled.div`
	background-color: ${props =>
		props.logo ? "transparent" : "rgba(0, 0, 0, 0.5)"};
	background-image: url(${props => props.logo});
	height: 65px;
	background-size: contain;
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

const CompanieLogo = ({ name, logo, country }) => (
	<Container>
		<ImageContainer>
			<Image logo={logo && `https://image.tmdb.org/t/p/w200${logo}`} />{" "}
		</ImageContainer>
		<Title>
			{name} {country !== "" && `(${country})`}
		</Title>
	</Container>
);

CompanieLogo.propTypes = {
	name: PropTypes.string.isRequired,
	logo: PropTypes.string,
	country: PropTypes.string
};

export default CompanieLogo;
