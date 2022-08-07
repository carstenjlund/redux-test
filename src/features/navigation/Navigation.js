import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<Link to="/counter">Counter</Link>
			<Link to="/users">show users</Link>
			<Link to="/adduser">add a user</Link>
		</nav>
	);
};

export default Navigation;
