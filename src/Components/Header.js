import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	align-items: center;
	color: white;
	background-color: rgba(20, 20, 20, 0.8);
	z-index: 10;
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
	display: flex;
`;

const Item = styled.li`
	width: 80px;
	height: 50px;
	text-align: center;
	border-bottom: 3px solid
		${props => (props.current ? "#3498db" : "transparent")};
	transition: border-bottom 0.5s ease-in-out;
`;

const ALink = styled(Link)`
	display: flex;
	height: 50px;
	align-items: center;
	justify-content: center;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
`;

export default withRouter(({ location: { pathname, key } }) => (
	<Header>
		<List>
			<Item current={pathname === "/"}>
				<ALink to="/">Movie</ALink>
			</Item>
			<Item current={pathname === "/tv"}>
				<ALink to="/tv">TV</ALink>
			</Item>
			<Item current={pathname === "/search"}>
				<ALink to="/search">Search</ALink>
			</Item>
		</List>
	</Header>
));
