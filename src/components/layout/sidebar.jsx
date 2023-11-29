import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import { FaRoute } from "react-icons/fa";
import { HiTicket } from "react-icons/hi2";
import { MenuOutlined } from "@ant-design/icons";
import { PiCarProfileFill } from "react-icons/pi";
import { BsFillPersonFill } from "react-icons/bs";
import { PiSteeringWheelFill } from "react-icons/pi";
import { HiClipboardList, HiCash, HiDocumentText } from "react-icons/hi";

const Sidebar = () => {
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarCollapsed(!isSidebarCollapsed);
	};
	return (
		<>
			<Menu
				style={{ width: isSidebarCollapsed ? "80px" : "200px", height: "100vh", transition: "width 0.3s" }}
				mode="inline"
				defaultSelectedKeys={["1"]}
				className="custom-menu"
			>
				<Button
					type="text"
					style={{ marginLeft: "12px", marginTop: "16px", marginBottom: "5px" }}
					onClick={toggleSidebar}
				>
					<MenuOutlined style={{ fontSize: "20px" }} />
				</Button>
				<Menu.Item key="1" icon={<BsFillPersonFill style={{ fontSize: "22px" }} />}>
					<Link to="/user-list">User List</Link>
				</Menu.Item>
				<Menu.Item key="2" icon={<PiSteeringWheelFill style={{ fontSize: "22px" }} />}>
					<Link to="/">Driver List</Link>
				</Menu.Item>
				<Menu.Item key="3" icon={<FaRoute style={{ fontSize: "22px" }} />}>
					Route List
				</Menu.Item>
				<Menu.Item key="4" icon={<HiTicket style={{ fontSize: "22px" }} />}>
					Voucher Catalogue
				</Menu.Item>
				<Menu.Item key="5" icon={<PiCarProfileFill style={{ fontSize: "22px" }} />}>
					Trip List Catalogue
				</Menu.Item>
				<Menu.Item key="6" icon={<HiClipboardList style={{ fontSize: "22px" }} />}>
					Booking List
				</Menu.Item>
				<Menu.Item key="7" icon={<HiCash style={{ fontSize: "22px" }} />}>
					All Transaction
				</Menu.Item>
				<Menu.Item key="8" icon={<HiDocumentText style={{ fontSize: "22px" }} />}>
					Ride List
				</Menu.Item>
			</Menu>
		</>
	);
};
export default Sidebar;
