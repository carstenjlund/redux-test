import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, fetchUsers } from "./usersSlice";

const Users = () => {
	const users = useSelector(selectUsers);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<div>
			<h1>This is the users Component.</h1>
			{users.status === "error" && (
				<p>There was an error loading data!</p>
			)}
			{users.status === "loading" && <p>Loading spinner!!!</p>}
			{users.data && (
				<ul>
					{users.data.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Users;
