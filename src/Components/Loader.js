import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
	width: 100vw;
`;

const Loader = () => <Container>Loading...</Container>;

export default Loader;
