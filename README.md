# Demoing some Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## UsersSlice

The usersSlice fetches 10 users from the jsonplaceholder api with a thunk and stores them in the usersstore. The usersSlice has an addUser method to, well, add a user!. I dispathc the fetchUser thunk from the app component, to make the state available to both the Users and AddUser components.

## Users component

Gets the users from state and displays them in a list.

## Add user component

Uses react-hook-form to add a user. The user is posted to the api, and the api response is added to the users state. Adding more than one user, will result in a warning in the console, since users are not really added to the api, any new user will return te same id (and I use the id's as keys when listing the users).
