import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Iframe from "react-iframe";

const Container = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	height: 40vw;
	margin-bottom: 40px;
	@media (max-width: 767px) {
		height: 50vw;
		margin-bottom: 20px;
	}
`;

const YT = styled(Iframe)`
	width: 100%;
	height: 100%;
`;

const YTSlider = ({ videoKey }) => (
	<Container>
		<YT url={`http://www.youtube.com/embed/${videoKey}`} />
	</Container>
);

YTSlider.propTypes = {
	videoKey: PropTypes.string.isRequired
};

export default YTSlider;
