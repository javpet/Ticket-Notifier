import React from "react";

const Header = props => {
	return (
		<header>
			<button onClick={() => props.incrementIndex()}>Show me a notification</button>
		</header>
	);
};

export default Header;
