import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Text = styled.p`
	color: #989898;
`;

const Error = ({ text }) => (
	<Container>
		<Text>{text}</Text>
	</Container>
);

Error.propTypes = {
	text: PropTypes.string.isRequired
};

export default Error;
