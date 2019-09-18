import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	padding-top: 30px;
	left: -20px;
`;

const Loader = () => <Container>Loading...</Container>;

export default Loader;
