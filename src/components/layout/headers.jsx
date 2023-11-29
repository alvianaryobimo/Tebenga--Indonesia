import React from "react";
import { Flex, Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const HeadersLogo = () => {
	const { Title } = Typography;
	return (
		<Flex direction="column" style={{ width: "100%" }}>
			<Flex
				style={{
					height: "80px",
					width: "237px",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#1D8AF5",
				}}
			>
				<Flex vertical>
					<Title style={{ fontSize: "20px", color: "white", margin: 0 }}>Tebengan</Title>
					<Title style={{ fontSize: "10px", color: "white", margin: 0 }}>Shuttle Dashboard</Title>
				</Flex>
			</Flex>
			<Flex
				style={{
					height: "80px",
					width: "100%",
					backgroundColor: "#1D8AF5",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Flex alignItems="center" style={{ marginLeft: "40px" }}>
					<Title style={{ fontSize: "20px", color: "white", fontWeight: "bold", margin: 0 }}>User List</Title>
				</Flex>
				<Flex alignItems="center" style={{ marginRight: "40px" }}>
					<Title style={{ fontSize: "14px", color: "white", marginRight: "10px" }}>Marjinal Kamarudin</Title>
					<Avatar size={40} icon={<UserOutlined />} />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default HeadersLogo;
