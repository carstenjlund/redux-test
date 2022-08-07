import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Navigation from "./features/navigation/Navigation";
import Users from "./features/users/Users";
import AddUser from "./features/users/AddUser";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";
import "./App.css";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<h1>This is my redux demo</h1>
				<Navigation />
				<Routes>
					<Route path="/counter" element={<Counter />} />
					<Route path="/users" element={<Users />} />
					<Route path="/adduser" element={<AddUser />} />
				</Routes>
			</header>
		</div>
	);
}

export default App;
