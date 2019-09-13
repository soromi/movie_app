import React from "react";
import { Link } from "react-router-dom";

export default () => (
	<header>
		<ul>
			<li>
				<Link to="/">Movie</Link>
			</li>
			<li>
				<Link to="/tv">TV</Link>
			</li>
			<li>
				<Link to="/search">Search</Link>
			</li>
		</ul>
	</header>
);
