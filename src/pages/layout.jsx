import Sidebar from "../components/layout/sidebar";
import HeadersLogo from "../components/layout/headers";
import { Flex } from "antd";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<HeadersLogo />
			<Flex>
				<Sidebar />
				<Outlet />
			</Flex>
		</>
	);
};

export default Layout;
