import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "./usersSlice";

const AddUser = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => dispatch(createUser(data));
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="name">type your name</label>
				<input id="name" {...register("name")} />
			</div>
			<div>
				<label htmlFor="username">type your username</label>
				<input id="username" {...register("username")} />
			</div>
			<div>
				<label htmlFor="email">type your email</label>
				<input id="email" {...register("email")} />
			</div>

			<button type="submit">submit</button>
		</form>
	);
};

export default AddUser;
