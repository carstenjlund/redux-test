import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<Link to="/counter">Counter</Link>
			<Link to="/data">Data Component</Link>
		</nav>
	);
};

export default Navigation;
