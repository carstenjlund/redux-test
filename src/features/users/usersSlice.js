import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	data: null,
	status: "idle",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await axios("https://jsonplaceholder.typicode.com/users");
	// The value we return becomes the `fulfilled` action payload
	return response.data;
});

export const usersSlice = createSlice({
	name: "users",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		addUser: (state, action) => {
			//post user to server and add server response to state...
			state.data.push(action.payload);
		},
	},
	// The `extraReducers` field lets the slice handle actions defined elsewhere,
	// including actions generated by createAsyncThunk or in other slices.
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = "idle";
				state.data = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = "error";
			});
	},
});

export const { addUser } = usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
