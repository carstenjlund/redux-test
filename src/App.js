import React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Navigation from "./features/navigation/Navigation";
import DataComponent from "./features/datacomponent/DataComponent";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>This is my redux demo</h1>
				<Navigation />
				<Routes>
					<Route path="/counter" element={<Counter />} />
					<Route path="/data" element={<DataComponent />} />
				</Routes>
			</header>
		</div>
	);
}

export default App;
