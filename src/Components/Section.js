import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	:not(:last-child) {
		margin-bottom: 50px;
	}
`;

const Title = styled.h1`
	font-size: 20px;
	margin-bottom: 20px;
`;

const Grid = styled.span`
	display: grid;
	grid-template-columns: repeat(auto-fill, 125px);
	grid-gap: 25px;
	@media (max-width: 767px) {
		grid-template-rows: repeat(auto-fill, 75vw);
		grid-template-columns: repeat(auto-fill, 47%);
		grid-gap: 5vw;
	}
`;

const Section = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grid>{children}</Grid>
	</Container>
);

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

export default Section;
