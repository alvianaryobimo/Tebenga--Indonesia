import Layout from "../pages/layout";
import UserList from "../components/user/userList";
import { createBrowserRouter } from "react-router-dom";

export const AppRouter = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/user-list",
				element: <UserList />,
			},
		],
	},
]);
